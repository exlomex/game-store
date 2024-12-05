import { classNames } from '@/lib/classNames';
import cls from './PromoContent.module.scss';
import {MainContainer} from "@/components/MainContainer";
import {useFetchPromocodes} from "@/components/PromoContent/api/fetchPromocodes";
import {PromoCard} from "@/components/PromoCard";

interface PromoContentProps {
    className?: string;
}

export const PromoContent = (props: PromoContentProps) => {
    const { className } = props;

    const {data: promosData} = useFetchPromocodes(null)

    return (
        <div className={classNames(cls.PromoContent, {}, [className])}>
            <MainContainer>
                <div className={cls.PromoInner}>
                    <h2 className={cls.PromoTitle}>Доступные промокоды:</h2>

                    <div className={cls.PromosContainer}>{
                        promosData && promosData.map(promo => (
                            <PromoCard id={promo.id} title={promo.name}/>
                        ))
                    }</div>
                </div>
            </MainContainer>
        </div>
    )
};
