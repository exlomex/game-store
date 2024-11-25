import { classNames } from '@/lib/classNames';
import cls from './Header.module.scss';
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {ReactComponent as LogoIcon} from "@/assets/logoIcon.svg";
import {useSelector} from "react-redux";
import {getUserAuth} from "@/store/selectors/getUserValues";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className } = props;

    const isAuth = useSelector(getUserAuth)

    const navItems: {title: string, titleKey: string}[] = [
        { title: 'PC', titleKey: 'PC' },
        { title: 'PS4', titleKey: 'PS4' },
        { title: 'PS5', titleKey: 'PS5' },
        { title: 'Xbox', titleKey: 'Xbox' },
        { title: 'Nintendo Switch', titleKey: 'NINTENDO' },
    ]

    const navigation = useNavigate()

    const onNavigationItemClickHandler = (titleKey: string) => () => {
        console.log(titleKey);
        navigation('/goods/search')
    }
    const dispatch = useAppDispatch()
    const onLogoutClickHandler = () => {
        dispatch(UserSliceActions.logout())
    }

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            <Link to={'/'} className={cls.Logo}>
                <LogoIcon/>
            </Link>

            <nav className={cls.Navigation}>
                {navItems.map((item, index) => (
                    <a
                        className={cls.NavigationItem}
                        key={index}
                        onClick={onNavigationItemClickHandler(item.titleKey)}>{item.title}</a>
                ))}
            </nav>

            {!isAuth ? (<Link to={'/login'} state={{ from: window.location.pathname }} className={cls.HeaderAuth}>Войти</Link>) : <p className={cls.HeaderAuth} onClick={onLogoutClickHandler}>Выйти</p>}
        </header>
    )
};
