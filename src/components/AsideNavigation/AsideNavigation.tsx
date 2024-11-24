import { classNames } from '@/lib/classNames';
import cls from './AsideNavigation.module.scss';
import {SearchGood} from "@/components/SearchGood";
import {ReactElement} from "react";
import {ReactComponent as HomeIcon} from "@/assets/homeIcon.svg";
import {ReactComponent as GameIcon} from "@/assets/gamesIcon.svg";
import {ReactComponent as PromoIcon} from "@/assets/promoIcon.svg";
import {ReactComponent as CartIcon} from "@/assets/cartIcon.svg";
import {ReactComponent as OrdersIcon} from "@/assets/ordersIcon.svg";
import {Link} from "react-router-dom";

interface AsideNavigationProps {
    className?: string;
}

export const AsideNavigation = (props: AsideNavigationProps) => {
    const { className } = props;

    const asideMenuItems: {title: string, icon: ReactElement, to: string}[] = [
        {title: 'Главная', icon: <HomeIcon/>, to: ''},
        {title: 'Игры', icon: <GameIcon/>, to: '/goods/search'},
        {title: 'Промокоды', icon: <PromoIcon/>, to: '/promo'},
        {title: 'Корзина', icon: <CartIcon/>, to: '/cart'},
        {title: 'Заказы', icon: <OrdersIcon/>, to: '/orders'},
    ]

    return (
        <aside className={classNames(cls.AsideNavigation, {}, [className])}>
            <SearchGood/>

            <nav className={cls.AsideNavigationItems}>
                {asideMenuItems.map((item, index) => (
                    <Link to={''} key={index} className={cls.AsideNavigationItem}>
                        {item.icon}
                        <p>{item.title}</p>
                    </Link>
                ))}
            </nav>
        </aside>
    )
};
