import cls from './DropDownList.module.scss';
import {ReactComponent as Search} from "@/assets/searchIcon.svg";
import {Link} from "react-router-dom";
import {classNames} from "@/lib/classNames";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {UserSliceActions} from "@/store/reducers/UserSlice";
import {GoodType} from "@/types/goodsTypes";

interface DropDownProps {
    className?: string;
    items?: GoodType[] | undefined;
    isLoading: boolean;
}

export const DropDownList = (props: DropDownProps) => {
    const { className, items, isLoading} = props;

    const dispatch = useAppDispatch()

    return (
        <div className={classNames(cls.DropDownList, {[cls.dataLoading]: isLoading}, [className])}>
            {
                !isLoading
                    ? (
                        items && items.length > 0
                            ? items.map(item => (
                                <Link
                                    to={`/goods/${item.id}`}
                                    key={item.id}
                                    className={cls.ItemWrapper}
                                    onClick={() => dispatch(UserSliceActions.setSearchIsOpen(false))}
                                >
                                    <div className={cls.ItemContent}>
                                        <Search/>
                                        <p className={cls.ItemTitle}>
                                            {item.title}
                                        </p>
                                    </div>
                                </Link>
                            ))
                            : <p className={cls.noContent}>Не найдено</p>
                    )
                    : <div className={cls.loaderWrapper}>
                        <span className={cls.loader}></span>
                    </div>
            }

        </div>
    )
};
