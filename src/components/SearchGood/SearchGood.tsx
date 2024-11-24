import { classNames } from '@/lib/classNames';
import cls from './SearchGood.module.scss';
import { ReactComponent as SearchSvg } from "@/assets/searchIcon.svg";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {LazyFetchGoodsByString} from "@/components/SearchGood/api/fetchGoodsByString";
import useDebounce from "@/hooks/useDebounce";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import {useSelector} from "react-redux";
import {getUserSearchIsOpen} from "@/store/selectors/getUserValues";
import {DropDownList} from "@/components/DropDownList";

interface SearchGoodProps {
    className?: string;
}

export const SearchGood = (props: SearchGoodProps) => {
    const { className } = props;

    const dispatch = useAppDispatch()
    const isSearchOpen = useSelector(getUserSearchIsOpen)

    const inputRef = useRef<HTMLInputElement>(null)
    const overlayRef = useRef<HTMLInputElement>(null)

    const [triggerGoodsFetch, {data: searchData, isLoading: searchIsLoading, error, isFetching: searchIsFetching}] = LazyFetchGoodsByString()

    const onSearchClickHandler = () => {
        if (!isSearchOpen) dispatch(UserSliceActions.setSearchIsOpen(true))

        inputRef.current && inputRef.current.focus()
    }

    useEffect(() => {
        const onClickHandler = (e: MouseEvent) => {
            if (e.target === overlayRef.current) {
                dispatch(UserSliceActions.setSearchIsOpen(false))
            }
        }
        document.addEventListener('click',  onClickHandler)
        return () => document.removeEventListener('click',  onClickHandler);
    }, []);

    useEffect(() => {
        const onClickHandler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                dispatch(UserSliceActions.setSearchIsOpen(false))
                inputRef.current && inputRef.current.blur()
            }
        }
        document.addEventListener('keydown',  onClickHandler)
        return () => document.removeEventListener('keydown',  onClickHandler);
    }, []);


    const [queryValue, setQueryValue] = useState('')
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQueryValue(e.target.value)
    }

    const debouncedQueryValue = useDebounce(queryValue, 1000)

    useEffect(() => {
        if (debouncedQueryValue) {
            triggerGoodsFetch({string: debouncedQueryValue})
        }
    }, [debouncedQueryValue]);

    return (
        <>
            <div className={classNames(cls.SearchGood, {[cls.inputActive]: isSearchOpen}, [className])}
                 onClick={onSearchClickHandler}>
                <div className={cls.Input_wrapper}>
                    <SearchSvg width={'25px'}/>
                    <input
                        className={classNames(cls.Input, {[cls.inputActive]: isSearchOpen}, [])}
                        placeholder={'Поиск'} type="text" ref={inputRef}
                        onChange={onInputChange} value={queryValue}
                    />

                </div>
                {debouncedQueryValue && isSearchOpen && <DropDownList items={searchData} isLoading={searchIsFetching}/>}
            </div>
            <div ref={overlayRef} className={classNames(cls.Overlay, {[cls.Overlay_active]: isSearchOpen}, [])}></div>
        </>
    )
};
