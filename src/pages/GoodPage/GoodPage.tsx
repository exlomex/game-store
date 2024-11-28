import { classNames } from '@/lib/classNames';
import cls from './GoodPage.module.scss';
import {AsideNavigation} from "@/components/AsideNavigation";
import {Header} from "@/components/Header";
import {MainLayout} from "@/components/layouts/MainLayout";
import {GoodDescription} from "@/components/GoodDescription";
import {useParams} from "react-router-dom";
import {GoodReviews} from "@/components/GoodReviews";

interface GoodPageProps {
    className?: string;
}

export const GoodPage = (props: GoodPageProps) => {
    const { className } = props;

    const {id: goodId} = useParams<{id: string}>()
    const convertedId = goodId ? +goodId : 0

    return (
        <div className={classNames(cls.GoodPage, {}, [className])}>
            <MainLayout AsideMenu={<AsideNavigation/>} Header={<Header/>} Content={
                <>
                    <GoodDescription goodId={convertedId}/>
                    <GoodReviews goodId={convertedId}/>
                </>
            }/>
        </div>
    )
};
