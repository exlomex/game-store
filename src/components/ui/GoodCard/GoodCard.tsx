import { classNames } from '@/lib/classNames';
import cls from './GoodCard.module.scss';

interface GoodCardProps {
    className?: string;
    title: string;
    price: number;
    image?: string | null;
}

export const GoodCard = (props: GoodCardProps) => {
    const { className, title, price, image } = props;
    return (
        <div className={classNames(cls.GoodCard, {}, [className])}>
            { image
                ? <img src={image} alt={`${title}`} className={cls.GoodImage}/>
                : <div className={classNames(cls.GoodImage, {}, [cls.GoodWithoutImage])}>{title}</div>
            }
            <p className={cls.GoodTitle}>{title}</p>
            <p className={cls.GoodPrice}>{price} ₽</p>
        </div>
    )
};
