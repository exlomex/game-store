import {classNames} from '@/lib/classNames';
import cls from './LoginForm.module.scss';
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {Button} from "@/components/ui/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {Input} from "@/components/ui/Input";
import {InputTypes} from "@/components/ui/Input/Input";
import {loginByUsername, loginByUsernameProps} from "@/store/services/loginByUsername";
import {Link, useLocation, useNavigate} from "react-router-dom";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm<loginDataInputs>()

    interface loginDataInputs {
        loginUsername: string;
        loginPassword: string
    }

    const navigate = useNavigate()
    const location = useLocation();
    const fromPage = location.state?.from || '/'

    const onSubmit: SubmitHandler<loginDataInputs> = async (data) => {
        const newData: loginByUsernameProps = {
            username: data.loginUsername,
            password: data.loginPassword
        }

        await dispatch(loginByUsername(newData))
        navigate(fromPage)
    }

    const loginFormUsernameReg = register("loginUsername", { required: true, onBlur: () => trigger('loginUsername')});
    const loginFormPasswordReg = register("loginPassword", { required: true, minLength: 5, onBlur: () => trigger('loginPassword')})

    return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
        <h2 className={cls.LoginFormTitle}>Авторизация</h2>
        <form className={classNames(cls.LoginFormForma, {}, [])} onSubmit={handleSubmit(onSubmit)}>
            <div className={cls.InputWrapper}>
                <label className={cls.InputTitle} htmlFor='loginUsername'>Логин</label>
                <Input
                    id={'loginUsername'}
                    error={errors.loginUsername}
                        className={classNames('', {}, [])}
                        placeholder={'Введите логин'}
                        register={{...loginFormUsernameReg}}
                    />
                    {errors.loginUsername && <span className={cls.InputErrorText}>Обязательное поле</span>}
                </div>
                <div className={cls.InputWrapper}>
                    <label className={cls.InputTitle} htmlFor='loginPassword'>Пароль</label>
                    <Input
                        error={errors.loginPassword}
                        register={{...loginFormPasswordReg}}
                        id={'loginPassword'}
                        className={classNames('', {}, [])}
                        placeholder={'Введите пароль'}
                        buttonType={InputTypes.PASSWORD_INPUT}
                    />
                    {errors.loginPassword &&
                        <span className={cls.InputErrorText}>Минимальная длина пароля 5 символов</span>}
                </div>

                <Button type={"submit"} className={cls.InputButton} fullWidth>Войти</Button>
                <div className={cls.FormBottomBlock}>
                    <p>Еще нет аккаунта?</p>
                    <Link to={'/register'}>Регистрация</Link>
                </div>
            </form>
        </div>
    )
};
