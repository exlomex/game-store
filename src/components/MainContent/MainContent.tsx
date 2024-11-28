import { classNames } from '@/lib/classNames';
import cls from './MainContent.module.scss';
import {FetchGoodsByString} from "@/components/SearchGood";
import {MainContainer} from "@/components/MainContainer";
import {GoodCard} from "@/components/ui/GoodCard";
import MainBlockGamePreview from '@/assets/pictures/mainBlockPreview.jpg'

interface MainContentProps {
    className?: string;
}

export const MainContent = (props: MainContentProps) => {
    const { className } = props;

    const {data: goods, isError, isLoading} = FetchGoodsByString({string: ''})

    return (
        <div className={classNames(cls.MainContent, {}, [className])}>
            <MainContainer>
                <div className={cls.ContentInner}>
                    <div className={cls.ContentMainBox}>
                        <img  className={cls.ContentMainBoxImage} src={MainBlockGamePreview} alt={'main block'}/>
                        <p>Добро пожаловать в <span>GameStore!</span></p>
                    </div>

                    <div className={cls.ContentGoods}>
                        {goods && goods.map(good => (
                            <GoodCard key={good.id} title={good.title} price={good.price} image={good.image} />
                        ))}
                    </div>

                </div>
            </MainContainer>
        </div>
    )
};
