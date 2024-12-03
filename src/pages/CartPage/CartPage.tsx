import { classNames } from '@/lib/classNames';
import cls from './CartPage.module.scss';
import {AsideNavigation} from "@/components/AsideNavigation";
import {Header} from "@/components/Header";
import {AboutUsContent} from "@/components/AboutUsContent";
import {MainLayout} from "@/components/layouts/MainLayout";
import {CartDescription} from "@/components/CartDescription";

interface CartPageProps {
    className?: string;
}

export const CartPage = (props: CartPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.CartPage, {}, [className])}>
            <MainLayout AsideMenu={<AsideNavigation/>} Header={<Header/>} Content={
                <CartDescription/>
            }/>
        </div>
    )
};
