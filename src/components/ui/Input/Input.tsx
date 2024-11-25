import React, {ForwardedRef, forwardRef, InputHTMLAttributes, useState} from 'react';
import cls from './Input.module.scss';
import {classNames} from "@/lib/classNames";
import {FieldError, UseFormRegisterReturn
} from "react-hook-form";
import {ReactComponent as OpenEyeIcon} from "@/assets/openInputIcon.svg";

type HtmlInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'maxLength'
>;

export const enum InputTypes {
    TEXT_INPUT = 'Text_input',
    PASSWORD_INPUT = 'Password_input',
}

const InputTypeClasses: Record<InputTypes, string> = {
    [InputTypes.TEXT_INPUT]: cls.TextInput,
    [InputTypes.PASSWORD_INPUT]: cls.PasswordInput,
};

interface InputProps extends HtmlInputProps {
    className?: string;
    maxLength?: number;
    buttonType?: InputTypes;
    register: UseFormRegisterReturn<string>;
    error: FieldError | undefined;
}

export const Input = forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
        const {
            className,
            placeholder,
            maxLength = 40,
            id,
            register,
            error,
            buttonType = InputTypes.TEXT_INPUT,
        } = props;

        const [buttonTypeState, setButtonTypeState] = useState(buttonType === InputTypes.TEXT_INPUT ? 'text' : 'password')
        const buttonTypeToggler = () => {
            setButtonTypeState(buttonTypeState === 'password' ? 'text' : 'password')
        }

        return (
            <div className={classNames(cls.InputWrapper, {[cls.InputError]: error !== undefined}, [])}>
                <input
                    maxLength={maxLength}
                    className={classNames(cls.Input, {}, [className, InputTypeClasses[buttonType]])}
                    placeholder={placeholder}
                    id={id}
                    autoComplete={'false'}
                    type={buttonTypeState}
                    {...register}
                />
                {buttonType === InputTypes.PASSWORD_INPUT && <span onClick={buttonTypeToggler} className={cls.OpenEyeIcon}><OpenEyeIcon/></span>}
            </div>
        );
})