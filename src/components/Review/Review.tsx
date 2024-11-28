import { classNames } from '@/lib/classNames';
import cls from './Review.module.scss';
import {Rating} from "react-simple-star-rating";
import {ReviewType} from "@/types/goodsTypes";

interface ReviewProps {
    className?: string;
    review: ReviewType;
}

export const Review = (props: ReviewProps) => {
    const { className, review } = props;


    return (
        <div className={classNames(cls.Review, {}, [className])}>
            <div className={cls.ReviewTopLine}>
                <div className={cls.ReviewTopLineTitle}>{review.user.firstName} {review.user.lastName}</div>

                <Rating
                    className={cls.GoodReviewRatingStar}
                    initialValue={review.rating}
                    readonly
                    size={24}
                />
            </div>

            <p className={cls.ReviewTitle}>{review.description}</p>
        </div>
    )
};
