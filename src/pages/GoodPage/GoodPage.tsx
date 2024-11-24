import { classNames } from '@/lib/classNames';
import cls from './GoodPage.module.scss';

interface GoodPageProps {
    className?: string;
}

export const GoodPage = (props: GoodPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.GoodPage, {}, [className])}>
            Goodpage
        </div>
    )
};
