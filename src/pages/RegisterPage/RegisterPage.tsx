import { classNames } from '@/lib/classNames';
import cls from './RegisterPage.module.scss';
import {MainLayout} from "@/components/layouts/MainLayout";
import {AsideNavigation} from "@/components/AsideNavigation";
import {Header} from "@/components/Header";
import {RegisterForm} from "@/components/RegisterForm";

interface RegisterPageProps {
    className?: string;
}

export const RegisterPage = (props: RegisterPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.RegisterPage, {}, [className])}>
            <MainLayout AsideMenu={<AsideNavigation/>} Header={<Header/>} Content={
                <RegisterForm/>
            }/>
        </div>
    )
};
