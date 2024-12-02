import { classNames } from '@/lib/classNames';
import cls from './AsideNavigation.module.scss';
import {SearchGood} from "@/components/SearchGood";
import {ReactElement, useEffect} from "react";
import {ReactComponent as HomeIcon} from "@/assets/homeIcon.svg";
import {ReactComponent as GameIcon} from "@/assets/gamesIcon.svg";
import {ReactComponent as PromoIcon} from "@/assets/promoIcon.svg";
import {ReactComponent as CartIcon} from "@/assets/cartIcon.svg";
import {ReactComponent as OrdersIcon} from "@/assets/ordersIcon.svg";
import {ReactComponent as InfoIcon} from "@/assets/infoIcon.svg";
import {Link} from "react-router-dom";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {useSelector} from "react-redux";
import {getUserAuth, getUserCartIds} from "@/store/selectors/getUserValues";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import {useLazyFetchCartItems} from "@/components/AsideNavigation/api/fetchCartItems";

interface AsideNavigationProps {
    className?: string;
}

export const AsideNavigation = (props: AsideNavigationProps) => {
    const { className } = props;

    const dispatch = useAppDispatch()
    const [fetchCartItems, {data: cartItems}] = useLazyFetchCartItems()

    const isAuth = useSelector(getUserAuth)

    useEffect(() => {
        if (isAuth) {
            fetchCartItems(null)
        }
    }, [isAuth, fetchCartItems]);

    useEffect(() => {
        if (cartItems) {
            dispatch(UserSliceActions.setCartItems(cartItems))
        }
    }, [cartItems, dispatch]);

    const CartItemsFromState = useSelector(getUserCartIds)

    const asideMenuItems: {title: string, icon: ReactElement, to: string}[] = [
        {title: 'Главная', icon: <HomeIcon/>, to: '/'},
        {title: 'Игры', icon: <GameIcon/>, to: '/goods/search'},
        {title: 'Промокоды', icon: <PromoIcon/>, to: '/promo'},
        {
            title: 'Корзина',
            icon: <div className={cls.CartWrapper}>
                {CartItemsFromState.length > 0 && <span>{CartItemsFromState.length}</span>}
                <CartIcon/>
            </div>,
            to: '/cart'
        },
        {title: 'Заказы', icon: <OrdersIcon/>, to: '/orders'},
        {title: 'О нас', icon: <InfoIcon/>, to: '/aboutUs'},
    ]

    return (
        <aside className={classNames(cls.AsideNavigation, {}, [className])}>
            <SearchGood/>

            <nav className={cls.AsideNavigationItems}>
                {asideMenuItems.map((item, index) => (
                    <Link to={item.to} key={index} className={cls.AsideNavigationItem}>
                        {item.icon}
                        <p>{item.title}</p>
                    </Link>
                ))}
            </nav>
        </aside>
    )
};
