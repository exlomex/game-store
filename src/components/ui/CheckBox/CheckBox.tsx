import { classNames } from '@/lib/classNames';
import cls from './CheckBox.module.scss';
import {Checkbox} from "@headlessui/react";
import {ReactComponent as ArrowIcon} from "@/assets/checkboxArrowIcon.svg";

interface CheckBoxProps {
    className?: string;
    isChecked: boolean
    onChange: () => void
}

export const CheckBox = (props: CheckBoxProps) => {
    const { className,onChange,isChecked } = props;

    return (
        <Checkbox
            checked={isChecked}
            onChange={onChange}
            className={classNames(cls.CheckBox, {}, [className])}
        >
            <ArrowIcon className={cls.CheckboxArrow}/>
        </Checkbox>
    )
};
