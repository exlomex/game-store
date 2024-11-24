import { classNames } from '@/lib/classNames';
import cls from './CategoryPage.module.scss';
import {MainLayout} from "@/components/layouts/MainLayout";
import {AsideNavigation} from "@/components/AsideNavigation";
import {Header} from "@/components/Header";

interface CategoryPageProps {
    className?: string;
}

export const CategoryPage = (props: CategoryPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.CategoryPage, {}, [className])}>
            <MainLayout AsideMenu={<AsideNavigation/>} Header={<Header/>} Content={
                <div>categorypage</div>
            }/>
        </div>
    )
};
