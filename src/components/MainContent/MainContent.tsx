import { classNames } from '@/lib/classNames';
import cls from './MainContent.module.scss';

interface MainContentProps {
    className?: string;
}

export const MainContent = (props: MainContentProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.MainContent, {}, [className])}>
            
        </div>
    )
};
