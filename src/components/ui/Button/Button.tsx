import cls from './Button.module.scss'
import {ButtonHTMLAttributes, ReactNode} from "react";
import {classNames, Mods} from "@/lib/classNames";

type OmittedBtnType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled'>

export enum ButtonType {
    DEFAULT_BUTTON = 'defaultBtn',
    ADD_GOOD_BUTTON = 'addGoodBtn',
    REMOVE_GOOD_BUTTON = 'removeGoodBtn',
}

const buttonTypeClasses: Record<ButtonType, string> = {
    [ButtonType.DEFAULT_BUTTON]: cls.DefaultButton,
    [ButtonType.ADD_GOOD_BUTTON]: cls.AddGoodButton,
    [ButtonType.REMOVE_GOOD_BUTTON]: cls.RemoveGoodButton
}

interface ButtonProps extends OmittedBtnType{
    className?: string,
    children?: ReactNode,
    onClick?: () => void,
    disabled?: boolean,
    fullWidth?: boolean;
    buttonType?: ButtonType;
}
export const Button = (props: ButtonProps) => {
    const {className, children, onClick, disabled, fullWidth, buttonType = ButtonType.DEFAULT_BUTTON} = props

    const mods: Mods = {
        [cls.FullWidthButton]: fullWidth,
        [cls.DisabledButton]: disabled
    }

    return (
        <button className={classNames(cls.Button, mods, [className, buttonTypeClasses[buttonType]])} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

