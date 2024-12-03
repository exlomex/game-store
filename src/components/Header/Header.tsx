import { classNames } from '@/lib/classNames';
import cls from './Header.module.scss';
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {ReactComponent as LogoIcon} from "@/assets/logoIcon.svg";
import {useSelector} from "react-redux";
import {getUserAuth} from "@/store/selectors/getUserValues";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import {AllConsoles} from "@/store/reducers/FilterSliceSchema";
import {FilterSliceActions} from "@/store/reducers/FilterSlice";
import {getFilterConsole} from "@/store/selectors/getFilterValues";
import {useMediaQuery} from "react-responsive";

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className } = props;

    const isAuth = useSelector(getUserAuth)

    const navItems: {title: string, titleKey: AllConsoles}[] = [
        { title: 'PC', titleKey: 'PC' },
        { title: 'PS4', titleKey: 'PS4' },
        { title: 'PS5', titleKey: 'PS5' },
        { title: 'Xbox', titleKey: 'XBOX' },
        { title: 'Nintendo', titleKey: 'NINTENDO' },
    ]

    const currentConsole = useSelector(getFilterConsole)

    const navigation = useNavigate()

    const onNavigationItemClickHandler = (titleKey: AllConsoles) => () => {
        dispatch(FilterSliceActions.setConsoleFilter(titleKey))
        navigation('/goods/search')
    }
    const dispatch = useAppDispatch()
    const onLogoutClickHandler = () => {
        dispatch(UserSliceActions.logout())
    }

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })

    return (
        <header className={classNames(cls.Header, {}, [className])}>
            {
                isTabletOrMobile ? (
                    <>
                        <div className={cls.HeaderUpperLine}>
                            <Link to={'/'} className={cls.Logo}>
                                <LogoIcon/>
                            </Link>

                            {!isAuth ? (<Link to={'/login'} state={{from: window.location.pathname}}
                                              className={cls.HeaderAuth}>Войти</Link>) :
                                <p className={cls.HeaderAuth} onClick={onLogoutClickHandler}>Выйти</p>}
                        </div>

                        <nav className={cls.Navigation}>
                            {navItems.map((item, index) => (
                                <a
                                    className={classNames(cls.NavigationItem, {[cls.Active]: item.titleKey === currentConsole}, [])}
                                    key={index}
                                    onClick={onNavigationItemClickHandler(item.titleKey)}>{item.title}</a>
                            ))}
                        </nav>
                    </>
                ) : (
                    <>
                        <Link to={'/'} className={cls.Logo}>
                            <LogoIcon/>
                        </Link>

                        <nav className={cls.Navigation}>
                            {navItems.map((item, index) => (
                                <a
                                    className={classNames(cls.NavigationItem, {[cls.Active]: item.titleKey === currentConsole}, [])}
                                    key={index}
                                    onClick={onNavigationItemClickHandler(item.titleKey)}>{item.title}</a>
                            ))}
                        </nav>

                        {!isAuth ? (<Link to={'/login'} state={{ from: window.location.pathname }} className={cls.HeaderAuth}>Войти</Link>) : <p className={cls.HeaderAuth} onClick={onLogoutClickHandler}>Выйти</p>}
                    </>
                )
            }

        </header>
    )
};
