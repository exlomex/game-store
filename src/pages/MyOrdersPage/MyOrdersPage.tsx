import { classNames } from '@/lib/classNames';
import cls from './MyOrdersPage.module.scss';
import {AsideNavigation} from "@/components/AsideNavigation";
import {Header} from "@/components/Header";
import {MainContent} from "@/components/MainContent";
import {MainLayout} from "@/components/layouts/MainLayout";
import {MyOrdersDescription} from "@/components/MyOrdersDescription";

interface MyOrdersPageProps {
    className?: string;
}

export const MyOrdersPage = (props: MyOrdersPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.MyOrdersPage, {}, [className])}>
            <MainLayout AsideMenu={<AsideNavigation/>} Header={<Header/>} Content={
                <MyOrdersDescription/>
            }/>
        </div>
    )
};
