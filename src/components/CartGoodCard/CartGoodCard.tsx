import { classNames } from '@/lib/classNames';
import cls from './CartGoodCard.module.scss';
import {ReactComponent as TrashSvg} from "@/assets/trashIcon.svg";
import {ReactComponent as MinusSvg} from "@/assets/counter/minusIcon.svg";
import {ReactComponent as PlusSvg} from "@/assets/counter/plusIcon.svg";
import {useDecreaseGoodQuantity, useIncreaseGoodQuantity} from "@/components/CartGoodCard/api/cartMutationsApi";
import {useDeleteGoodFromCart} from "@/components/ui/GoodCard/api/cartApi";
import {CheckBox} from "@/components/ui/CheckBox";
import {useSelector} from "react-redux";
import {getUserActiveCartCheckboxes} from "@/store/selectors/getUserValues";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import {GoodType} from "@/types/goodsTypes";

interface CartGoodCardProps {
    className?: string;
    good: GoodType;
    quantity: number;
    cartId: number
}

export const CartGoodCard = (props: CartGoodCardProps) => {
    const { className, quantity, good, cartId } = props;

    const [increaseGoodQuantity, {}] = useIncreaseGoodQuantity()
    const [decreaseGoodQuantity, {}] = useDecreaseGoodQuantity()

    const onCounterMinusClickHandler = () => {
        decreaseGoodQuantity({id: cartId})
    }

    const onCounterPlusClickHandler = () => {
        increaseGoodQuantity({id: cartId})
    }

    const [deleteGood, {}] = useDeleteGoodFromCart();
    const onSingleTrashButtonClickHandler = () => {
        deleteGood({ids: [cartId]})
    };

    const activeCartCheckboxes = useSelector(getUserActiveCartCheckboxes)
    const onMultiplyTrashButtonClickHandler = () => {
        const deleteIds: number[] = []
        Object.keys(activeCartCheckboxes).forEach(key => {
            if (activeCartCheckboxes[+key]) deleteIds.push(+key)
        })
        console.log(deleteIds);
        // deleteGood({ids: [cartId]})
    };
    const dispatch = useAppDispatch()
    const onSingleCheckBoxClickHandler = () => {
        dispatch(UserSliceActions.toggleActiveCartCheckbox(cartId))
    }

    return (
        <div className={classNames(cls.CartGoodCard, {}, [className])}>
            <div className={cls.LeftContent}>
                <div className={cls.GoodCardImageContainer}>
                    {good.image ? <img src={good.image} className={cls.GoodCardImage} alt=""/> :
                        <div className={cls.GoodCardImage}></div>}
                </div>

                <div className={cls.ContentGoodDescription}>
                    <h2 className={cls.ContentTitle}>{good.title}</h2>
                    <p className={cls.ContentPrice}>{good.price} ₽</p>
                </div>
            </div>


            <div className={cls.RightContent}>
                <div className={cls.Counter}>
                    <div className={classNames(cls.CounterSvg, {[cls.disabled]: quantity <= 1}, [])}
                         onClick={onCounterMinusClickHandler}><MinusSvg className={cls.CounterMinus}/></div>
                    <span className={cls.CounterCount}>{quantity}</span>
                    <div className={cls.CounterSvg} onClick={onCounterPlusClickHandler}><PlusSvg
                        className={cls.CounterPlus}/></div>
                </div>

                <div className={cls.BottomLine}>
                    <span className={cls.DeleteButton}><TrashSvg onClick={onSingleTrashButtonClickHandler}/></span>
                    <CheckBox isChecked={activeCartCheckboxes[cartId] || false}
                              onChange={onSingleCheckBoxClickHandler}/>
                </div>
            </div>
        </div>
    )
};
