import { classNames } from '@/lib/classNames';
import cls from './AboutUsPage.module.scss';
import {MainLayout} from "@/components/layouts/MainLayout";
import {AsideNavigation} from "@/components/AsideNavigation";
import {Header} from "@/components/Header";
import {CategoryContent} from "@/components/CategoryContent";
import {AboutUsContent} from "@/components/AboutUsContent";

interface AboutUsPageProps {
    className?: string;
}

export const AboutUsPage = (props: AboutUsPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.AboutUsPage, {}, [className])}>
            <MainLayout AsideMenu={<AsideNavigation/>} Header={<Header/>} Content={
                <AboutUsContent/>
            }/>
        </div>
    )
};
