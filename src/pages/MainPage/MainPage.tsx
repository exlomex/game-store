import { classNames } from '@/lib/classNames';
import cls from './MainPage.module.scss';
import {Header} from "@/components/Header";
import {AsideNavigation} from "@/components/AsideNavigation";
import {MainLayout} from "@/components/layouts/MainLayout";
import {MainContent} from "@/components/MainContent";

interface MainPageProps {
    className?: string;
}

export const MainPage = (props: MainPageProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <MainLayout AsideMenu={<AsideNavigation/>} Header={<Header/>} Content={
                <MainContent/>
            }/>
        </div>
    )
};
