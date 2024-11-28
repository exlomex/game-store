import { classNames } from '@/lib/classNames';
import cls from './CategoryContent.module.scss';
import {MainContainer} from "@/components/MainContainer";
import {Select} from "@/components/ui/Select";
import {AllConsoles, AllGenres, AllRatings} from "@/store/reducers/FilterSliceSchema";
import {OptionInterface} from "@/components/ui/Select/Select";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {FilterSliceActions} from "@/store/reducers/FilterSlice";
import {useSelector} from "react-redux";
import {getFilterConsole, getFilterGenre, getFilterGoods, getFilterRating} from "@/store/selectors/getFilterValues";
import {ReactComponent as FilterIcon} from "@/assets/filterIcon.svg";
import {useEffect} from "react";
import {getGoodsByFilter, getGoodsByFilterProps} from "@/store/services/getGoodsByFilter";
import {GoodCard} from "@/components/ui/GoodCard";

interface CategoryContentProps {
    className?: string;
}

export const CategoryContent = (props: CategoryContentProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const currentGenre = useSelector(getFilterGenre)
    const genreOptions: OptionInterface<AllGenres | ''>[] = [
        {value: '', title: 'Жанр'},
        {value: 'SPORT', title: 'Спорт'},
        {value: 'FIGHTING', title: 'Файтинги'},
    ]
    const handleGenreChange = (value: AllGenres | '') => {
        dispatch(FilterSliceActions.setGenreFilter(value));
    };

    const currentConsole = useSelector(getFilterConsole)
    const consoleOptions: OptionInterface<AllConsoles | ''>[] = [
        {value: '', title: 'Консоль'},
        {value: 'PC', title: 'ПК'},
        {value: 'PS4', title: 'PS4'},
        {value: 'PS5', title: 'PS5'},
        {value: 'XBOX', title: 'XBOX'},
        {value: 'NINTENDO', title: 'NINTENDO'},
    ]
    const handleConsoleChange = (value: AllConsoles | '') => {
        dispatch(FilterSliceActions.setConsoleFilter(value));
    };

    const currentRating = useSelector(getFilterRating)
    const ratingOptions: OptionInterface<AllRatings | ''>[] = [
        {value: '', title: 'Рейтинг'},
        {value: 'GREATER_THAN_3', title: 'Выше 3'},
        {value: 'GREATER_THAN_3_5', title: 'Выше 3,5'},
        {value: 'GREATER_THAN_4', title: 'Выше 4'},
        {value: 'GREATER_THAN_4_5', title: 'Выше 4,5'},
    ]
    const handleRatingChange = (value: AllRatings | '') => {
        dispatch(FilterSliceActions.setRatingFilter(value));
    };

    useEffect(() => {
        const Filters: Partial<getGoodsByFilterProps> = {};

        if (currentRating) Filters.rating = currentRating;
        if (currentConsole) Filters.console = currentConsole;
        if (currentGenre) Filters.genre = currentGenre;

        if ((!currentRating && !currentConsole && !currentGenre)) {dispatch(getGoodsByFilter(''))} else {
            dispatch(getGoodsByFilter(Filters))
        }
    }, [currentRating, currentConsole, currentGenre]);

    const filtredGoods = useSelector(getFilterGoods)

    return (
        <div className={classNames(cls.CategoryContent, {}, [className])}>
            <MainContainer>
                <div className={cls.CategoryInner}>
                    <div className={cls.CategoryFilters}>
                        <FilterIcon/>
                        <Select options={genreOptions} onChange={handleGenreChange} currentValue={currentGenre}/>
                        <Select options={consoleOptions} onChange={handleConsoleChange} currentValue={currentConsole}/>
                        <Select options={ratingOptions} onChange={handleRatingChange} currentValue={currentRating}/>
                    </div>

                    <div className={cls.CategoryGoods}>
                        {filtredGoods && filtredGoods.map(good => (
                            <GoodCard key={good.id} title={good.title} price={good.price} image={good.image}/>
                        ))}
                    </div>
                </div>
            </MainContainer>
        </div>
    )
};
