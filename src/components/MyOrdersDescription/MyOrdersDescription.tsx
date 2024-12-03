import { classNames } from '@/lib/classNames';
import cls from './MyOrdersDescription.module.scss';
import {useFetchMyOrders} from "@/components/MyOrdersDescription/api/fetchMyOrders";
import {OrderedGoodsList} from "@/components/OrderedGoodsList";
import {MainContainer} from "@/components/MainContainer";

interface MyOrdersDescriptionProps {
    className?: string;
}

export const MyOrdersDescription = (props: MyOrdersDescriptionProps) => {
    const { className } = props;

    const {data: orders, isLoading} = useFetchMyOrders(null)

    if (isLoading) return <></>

    if (!isLoading && !orders) {
        return (
            <MainContainer>
                <div className={classNames(cls.MyOrdersDescription, {}, [className])}>
                    Заказы не найдены
                </div>
            </MainContainer>
        )
    }

    return (
        <MainContainer>
            <div className={classNames(cls.MyOrdersDescription, {}, [className])}>
                {orders && orders.map(orderElement => (
                    <OrderedGoodsList key={orderElement.id} orderDescription={orderElement}/>
                ))}
            </div>
        </MainContainer>
    )
};
