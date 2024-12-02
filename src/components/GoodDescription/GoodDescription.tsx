import { classNames } from '@/lib/classNames';
import cls from './GoodDescription.module.scss';
import {useFetchGoodById} from "@/components/GoodDescription/api/fetchGoodById";
import {MainContainer} from "@/components/MainContainer";
import {Button} from "@/components/ui/Button";
import {useSelector} from "react-redux";
import {getUserAuth, getUserCartIdByGoodId, getUserCartIds} from "@/store/selectors/getUserValues";
import {AllConsoles, AllGenres} from "@/store/reducers/FilterSliceSchema";
import {useGoodButtonHandler} from "@/hooks/useButtonClickHandler";

interface GoodDescriptionProps {
    className?: string;
    goodId: number;
}

export const GoodDescription = (props: GoodDescriptionProps) => {
    const { className, goodId } = props;

    const {data} = useFetchGoodById({id: goodId})

    const cartIds = useSelector(getUserCartIds)
    const isGoodInCartByIds = cartIds.includes(goodId)
    const isAuth = useSelector(getUserAuth)
    const cartIdByGoodId = useSelector(getUserCartIdByGoodId(goodId))

    const {onGoodButtonClickHandler} = useGoodButtonHandler()

    type specificationsInterface = {
        [key in (AllConsoles | AllGenres)]: string;
    };

    const specificationsMap: { [key in 'genre' | 'console']: Partial<specificationsInterface> } = {
        genre: {
            'FIGHTING': 'Файтинг',
            'SPORT': 'Спорт'
        },
        console: {
            'PC': 'ПК',
            'PS5': 'PS5',
            'NINTENDO': 'Nintendo Switch',
            'PS4': 'PS4',
            'XBOX': 'Xbox',
        }
    }

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
                        <div className={cls.GoodSpecs}>
                            <p className={cls.GoodSpecTitle}>Характеристики: </p>
                            <p className={cls.GoodSpecTypography}><span>Жанр: </span>{specificationsMap.genre[data.genre]}</p>
                            <p className={cls.GoodSpecTypography}><span>Платформа: </span> {specificationsMap.console[data.console]}</p>
                        </div>

                        <p className={cls.GoodDescriptionPrice}>{data.price} ₽</p>
                        <Button onClick={onGoodButtonClickHandler(isGoodInCartByIds, goodId, cartIdByGoodId)} disabled={!isAuth}>{isGoodInCartByIds ? 'Удалить из корзины' : 'В корзину'}</Button>
                    </div>
                </div>
            </MainContainer>
        </section>
    )
};
