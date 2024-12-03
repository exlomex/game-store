import { classNames } from '@/lib/classNames';
import cls from './PromoContent.module.scss';
import {MainContainer} from "@/components/MainContainer";

interface PromoContentProps {
    className?: string;
}

export const PromoContent = (props: PromoContentProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.PromoContent, {}, [className])}>
            <MainContainer>
                <div className={cls.PromoInner}>
                    <h2>PromoContent</h2>

                    <div>
                        promos
                    </div>
                </div>
            </MainContainer>
        </div>
    )
};
