import { classNames } from '@/lib/classNames';
import cls from './Select.module.scss';
import {Select as HSelect} from "@headlessui/react";
import {ReactComponent as SelectIcoN} from "@/assets/selectArrowIcon.svg";
import React from "react";

export interface OptionInterface<T> {
    value: T;
    title: string;
}

interface SelectProps<T extends string> {
    className?: string;
    options: OptionInterface<T>[];
    currentValue: T | string;
    onChange: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, options, currentValue, onChange } = props;
    return (
        <div className={cls.SelectWrapper}>
            <HSelect
                value={currentValue}
                onChange={(e) => onChange(e.target.value as T)}
                className={classNames(cls.Select, {}, [className])}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.title}</option>
                ))}
            </HSelect>
            <SelectIcoN className={cls.SelectIcon}/>
        </div>
    )
};
