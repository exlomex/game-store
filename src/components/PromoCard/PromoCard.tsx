import { classNames } from '@/lib/classNames';
import cls from './PromoCard.module.scss';
import {Button} from "@/components/ui/Button";
import {useDispatch, useSelector} from "react-redux";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import {getUserActivePromo} from "@/store/selectors/getUserValues";

interface PromoCardProps {
    className?: string;
    id: number
    title: string
}

export const PromoCard = (props: PromoCardProps) => {
    const { className, id, title } = props;

    const dispatch = useAppDispatch()

    const onPromoClickHandler = () => {
        dispatch(UserSliceActions.setActivePromo({id: id, name: title}))
    }

    const activePromo = useSelector(getUserActivePromo)

    return (
        <div className={classNames(cls.PromoCard, {}, [className])}>
            <h2 className={cls.PromoTitle}>Промокод</h2>
            <p className={cls.PromoSubTitle}>Дает скидку при оформлении заказа</p>

            <div className={cls.PromoBottomContainer}>
                <div className={cls.PromoName}>{title}</div>
                <Button onClick={onPromoClickHandler} disabled={activePromo && activePromo.id === id} className={cls.PromoButton}>
                    {activePromo && activePromo.id === id ? 'Применен' : 'Применить'}
                </Button>
            </div>
        </div>
    )
};
