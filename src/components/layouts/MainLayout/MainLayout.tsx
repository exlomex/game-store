import { classNames } from '@/lib/classNames';
import cls from './MainLayout.module.scss';
import {ReactElement} from "react";

interface MainLayoutProps {
    className?: string;
    AsideMenu: ReactElement;
    Header: ReactElement;
    Content: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
    const { className, Header, Content, AsideMenu } = props;
    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            {Header}
            <div className={cls.LayoutSplit}>
                <div className={cls.LayoutAside}>{AsideMenu}</div>
                <div className={cls.LayoutContent}>{Content}</div>
            </div>
        </div>
    )
};
