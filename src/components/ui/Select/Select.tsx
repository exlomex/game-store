import { classNames } from '@/lib/classNames';
import cls from './Select.module.scss';
import {Select as HSelect} from "@headlessui/react";
import {ReactComponent as SelectIcoN} from "@/assets/selectArrowIcon.svg";
import React from "react";

export interface OptionInterface<T> {
    value: T;
    title: string;
    id?: number;
}

interface SelectProps<T extends string> {
    className?: string;
    options: OptionInterface<T>[];
    currentValue: T | string;
    onChange: (value: T, id?: number) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, options, currentValue, onChange } = props;

    return (
        <div className={cls.SelectWrapper}>
            <HSelect
                value={currentValue}

                onChange={(e) => {
                    const value = e.target.value as T;
                    const id = e.target.selectedOptions[0].getAttribute('data-id');
                    onChange(value, id ? parseInt(id, 10) : undefined);
                }}

                className={classNames(cls.Select, {}, [className])}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value} data-id={option.id}>{option.title}</option>
                ))}
            </HSelect>
            <SelectIcoN className={cls.SelectIcon}/>
        </div>
    )
};
