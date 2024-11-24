import { classNames } from '@/lib/classNames';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

export const MainPage = (props: MainPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            mainpage
        </div>
    )
};
