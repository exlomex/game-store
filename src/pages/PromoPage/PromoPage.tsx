import { classNames } from '@/lib/classNames';
import cls from './PromoPage.module.scss';
import {AsideNavigation} from "@/components/AsideNavigation";
import {Header} from "@/components/Header";
import {MainLayout} from "@/components/layouts/MainLayout";
import {PromoContent} from "@/components/PromoContent/PromoContent";

interface PromoPageProps {
    className?: string;
}

export const PromoPage = (props: PromoPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.PromoPage, {}, [className])}>
            <MainLayout AsideMenu={<AsideNavigation/>} Header={<Header/>} Content={
                <PromoContent/>
            }/>
        </div>
    )
};
