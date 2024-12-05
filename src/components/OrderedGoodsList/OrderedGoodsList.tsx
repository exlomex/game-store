import { classNames } from '@/lib/classNames';
import cls from './OrderedGoodsList.module.scss';
import {OrderInterface} from "@/components/CartDescription/api/createOrderApi";

interface OrderedGoodsListProps {
    className?: string;
    orderDescription: OrderInterface;
}

export const OrderedGoodsList = (props: OrderedGoodsListProps) => {
    const { className, orderDescription } = props;

    const goodsList = orderDescription.orderItems

    console.log(orderDescription);

    function formatDate(dateString: string): string {
        const date = new Date(dateString);

        const options: Intl.DateTimeFormatOptions = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };

        return date.toLocaleDateString('ru-RU', options);
    }

    return (
        <div className={classNames(cls.OrderedGoodsList, {}, [className])}>
            <div className={cls.GoodsListTopLine}>
                <p className={cls.orderDate}><span>Заказ за</span> {formatDate(orderDescription.dateCreated)}</p>
                <p className={cls.OrderPrice}><span>Стоимость: </span>{orderDescription.amount} ₽</p>
            </div>

            <div className={cls.GoodsList}>
                {goodsList.map((good, index) => (
                    <div key={good.id} className={cls.GoodWrapper}>
                        <div className={cls.GoodCount}>{index + 1}.</div>
                        <div className={cls.GoodTitle}> {good.good.title}</div>
                        <div className={cls.GoodPrice}><span>Стоимость:</span> {good.good.price} ₽</div>
                        <div className={cls.GoodQuantity}><span>Количество:</span> {good.quantity}</div>
                    </div>
                ))}
            </div>
        </div>
    )
};
