import { classNames } from '@/lib/classNames';
import cls from './CategoryPage.module.scss';

interface CategoryPageProps {
    className?: string;
}

export const CategoryPage = (props: CategoryPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.CategoryPage, {}, [className])}>
            mainpage
        </div>
    )
};
