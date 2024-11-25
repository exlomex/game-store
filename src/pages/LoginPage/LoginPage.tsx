import { classNames } from '@/lib/classNames';
import cls from './LoginPage.module.scss';
import {AsideNavigation} from "@/components/AsideNavigation";
import {Header} from "@/components/Header";
import {MainLayout} from "@/components/layouts/MainLayout";
import {LoginForm} from "@/components/LoginForm";

interface LoginPageProps {
    className?: string;
}

export const LoginPage = (props: LoginPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.LoginPage, {}, [className])}>
            <MainLayout AsideMenu={<AsideNavigation/>} Header={<Header/>} Content={
                <LoginForm/>
            }/>
        </div>
    )
};
