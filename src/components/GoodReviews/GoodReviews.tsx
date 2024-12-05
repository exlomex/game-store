import { classNames } from '@/lib/classNames';
import cls from './GoodReviews.module.scss';
import {MainContainer} from "@/components/MainContainer";
import {Rating} from "react-simple-star-rating";
import {Review} from "@/components/Review";
import {useFetchGoodReviewsById} from "@/components/GoodReviews/api/fetchGoodReviewsById";
import {useCallback, useState} from "react";
import {TextArea} from "@/components/ui/TextArea";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {Button} from "@/components/ui/Button";
import {useSelector} from "react-redux";
import {getUserAuth} from "@/store/selectors/getUserValues";
import {reviewBody, useAddNewReview} from "@/components/GoodReviews/api/AddReviewApi";
import {ReviewType} from "@/types/goodsTypes";

interface GoodReviewsProps {
    className?: string;
    goodId: number;
}

export const GoodReviews = (props: GoodReviewsProps) => {
    const { className, goodId} = props;

    const {data: reviews, isLoading, isError} = useFetchGoodReviewsById({id: goodId})

    const averageRating = useCallback((reviews: ReviewType[]): number => {
        return Math.round(reviews.reduce((acc, item) => acc + item.rating , 0) / reviews.length)
    }, [reviews])

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
        resetField
    } = useForm<reviewDataTextArea>()

    interface reviewDataTextArea {
        reviewDescription: string;
    }

    const [triggerAddNewReview, {}] = useAddNewReview()
    const onSubmit: SubmitHandler<reviewDataTextArea> = (data) => {
        const reviewBody: reviewBody = {
            goodId: goodId,
            rating: rating,
            description: data.reviewDescription
        }
        triggerAddNewReview(reviewBody)
        resetField('reviewDescription')
    }

    const reviewFormDescription = register("reviewDescription", { required: true, onBlur: () => trigger('reviewDescription')});

    const [rating, setRating] = useState(1)
    const handleRating = (rate: number) => {
        setRating(rate)
    }

    const isAuth = useSelector(getUserAuth)

    if (!reviews) {
        return (
            <></>
        )
    }

    return (
        <section className={classNames(cls.GoodReviews, {}, [className])}>
            <MainContainer>
                <div className={cls.GoodReviewsInner}>
                    <h3 className={cls.GoodReviewsTitle}>Отзывы</h3>

                    <div className={cls.GoodReviewRating}>
                        <p className={cls.GoodReviewRatingTitle}>Средняя оценка: {averageRating(reviews) || 0}</p>
                        <Rating
                            className={cls.GoodReviewRatingStar}
                            initialValue={averageRating(reviews) || 0}
                            readonly
                            size={30}
                        />
                    </div>

                    <form className={cls.GoodReviewsForm} onSubmit={handleSubmit(onSubmit)}>
                        <label className={classNames(cls.TextAreaTitle, {[cls.TextDisabled]: !isAuth}, [])} htmlFor='reviewDescription'>Добавить отзыв:</label>

                        <div className={cls.TextAreaWrapper}>
                            <TextArea
                                disabled={!isAuth}
                                id={'reviewDescription'}
                                register={{...reviewFormDescription}}
                                placeholder={'Введите ваш отзыв'}
                                error={errors.reviewDescription}
                            />
                            {errors.reviewDescription && <span className={cls.TextAreaErrorText}>Поле должно быть заполнено</span>}
                        </div>

                        <div className={cls.RatingBottomLine}>
                            <div className={cls.YourRating}>
                                <label className={cls.RatingTitle}>Оценка:</label>
                                <Rating
                                    readonly={!isAuth}
                                    className={classNames(cls.GoodReviewFormRatingStar, {[cls.RatingDisabled]: !isAuth}, [])}
                                    onClick={handleRating}
                                    initialValue={rating}
                                    size={25}
                                />
                            </div>

                            <Button disabled={!isAuth} type={"submit"} className={cls.GoodReviewsFormButton}>Отправить</Button>
                        </div>
                    </form>

                    <div className={cls.GoodWrapper}>
                        {reviews.map(review => (
                            <Review key={review.id} review={review}/>
                        ))}
                    </div>
                </div>
            </MainContainer>
        </section>
    )
};
