import { classNames } from '@/lib/classNames';
import cls from './GoodDescription.module.scss';
import {useFetchGoodById} from "@/components/GoodDescription/api/fetchGoodById";
import {MainContainer} from "@/components/MainContainer";
import {Button} from "@/components/ui/Button";
import {useSelector} from "react-redux";
import {getUserAuth} from "@/store/selectors/getUserValues";

interface GoodDescriptionProps {
    className?: string;
    goodId: number;
}

export const GoodDescription = (props: GoodDescriptionProps) => {
    const { className, goodId } = props;

    const {data, isLoading, error} = useFetchGoodById({id: goodId})

    // const cartIds = useSelector(getUserCartIds)

    // TODO CART
    const isGoodInCartByIds = false
    // const isGoodInCartByIds = cartIds.includes(goodId)
    const isAuth = useSelector(getUserAuth)
    // const cartIdByGoodId = useSelector(getUserCartIdByGoodId(goodId))

    // const {onGoodButtonClickHandler} = useGoodButtonHandler()

    if (!data) return (
        <></>
    )

    return (
        <section className={classNames(cls.GoodDescription, {}, [className])}>
            <MainContainer>
                <div className={cls.GoodDescriptionTitle}>{data.title}</div>

                <div className={cls.GoodDescriptionInner}>
                    {data.image ?
                        <img className={cls.GoodImage} src={data.image} alt={`${data.title} image`}/> :
                        <div className={classNames(cls.GoodImage, {}, [cls.GoodWithoutImage])}></div>
                    }

                    <div className={cls.GoodDescriptionRightBox}>
                        <p className={cls.GoodDescriptionPrice}>{data.price} ₽</p>
                        <Button disabled={!isAuth}>{isGoodInCartByIds ? 'Удалить из корзины' : 'В корзину'}</Button>
                        {/*<Button onClick={onGoodButtonClickHandler(isGoodInCartByIds, goodId, cartIdByGoodId)} disabled={!isAuth}>{isGoodInCartByIds ? 'Удалить из корзины' : 'В корзину'}</Button>*/}
                    </div>
                </div>
            </MainContainer>
        </section>
    )
};
