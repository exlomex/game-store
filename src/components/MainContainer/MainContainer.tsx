import { classNames } from '@/lib/classNames';
import cls from './MainContainer.module.scss';
import {ReactNode} from "react";

interface MainContainerProps {
    className?: string;
    children: ReactNode;
}

export const MainContainer = (props: MainContainerProps) => {
    const { className, children } = props;
    return (
        <div className={classNames(cls.MainContainer, {}, [className])}>
            {children}
        </div>
    )
};
