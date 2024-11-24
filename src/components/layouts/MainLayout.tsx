import { classNames } from '@/lib/classNames';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
}

export const MainLayout = (props: MainLayoutProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            layout
        </div>
    )
};
