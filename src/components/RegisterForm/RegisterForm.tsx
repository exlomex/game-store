import {classNames} from '@/lib/classNames';
import cls from './RegisterForm.module.scss';
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {Button} from "@/components/ui/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import {Input} from "@/components/ui/Input";
import {InputTypes} from "@/components/ui/Input/Input";
import {registerService, registerServiceProps} from "@/store/services/registerService";
import {Link, useLocation, useNavigate} from "react-router-dom";

interface RegisterFormProps {
    className?: string;
}

export const RegisterForm = (props: RegisterFormProps) => {
    const { className } = props;
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors },
    } = useForm<registerDataInputs>()

    interface registerDataInputs {
        registerFirstName: string;
        registerLastName: string
        registerUsername: string
        registerPassword: string
    }

    const navigate = useNavigate()
    const location = useLocation();
    const fromPage = location.state?.from || '/'
    const onSubmit: SubmitHandler<registerDataInputs> = async (data) => {
        const registerData: registerServiceProps = {
            username: data.registerUsername,
            password: data.registerPassword,
            firstName: data.registerFirstName,
            lastName: data.registerLastName
        }

        await dispatch(registerService(registerData))
        navigate(fromPage)
    }

    const registerFormFirstNameReg = register("registerFirstName", { required: true, onBlur: () => trigger('registerFirstName')})
    const registerFormLastNameReg = register("registerLastName", { required: true, onBlur: () => trigger('registerLastName')})
    const registerFormUsernameReg = register("registerUsername", { required: true, onBlur: () => trigger('registerUsername')});
    const registerFormPasswordReg = register("registerPassword", { required: true, minLength: 5, onBlur: () => trigger('registerPassword')})

    return (
        <div className={classNames(cls.RegisterForm, {}, [className])}>
            <h2 className={cls.RegisterFormTitle}>Регистрация</h2>
            <form className={classNames(cls.RegisterFormForma, {}, [])} onSubmit={handleSubmit(onSubmit)}>
                <div className={cls.InputWrapper}>
                    <label className={cls.InputTitle} htmlFor='registerFirstName'>Имя</label>
                    <Input
                        id={'registerFirstName'}
                        error={errors.registerFirstName}
                        className={classNames('', {}, [])}
                        placeholder={'Введите имя'}
                        register={{...registerFormFirstNameReg}}
                    />

                    {errors.registerFirstName && <span className={cls.InputErrorText}>Обязательное поле</span>}
                </div>

                <div className={cls.InputWrapper}>
                    <label className={cls.InputTitle} htmlFor='registerLastName'>Фамилия</label>
                    <Input
                        id={'registerLastName'}
                        error={errors.registerLastName}
                        className={classNames('', {}, [])}
                        placeholder={'Введите фамилию'}
                        register={{...registerFormLastNameReg}}
                    />

                    {errors.registerLastName && <span className={cls.InputErrorText}>Обязательное поле</span>}
                </div>

                <div className={cls.InputWrapper}>
                    <label className={cls.InputTitle} htmlFor='registerUsername'>Логин</label>
                    <Input
                        id={'registerUsername'}
                        error={errors.registerUsername}
                        className={classNames('', {}, [])}
                        placeholder={'Введите логин'}
                        register={{...registerFormUsernameReg}}
                    />

                    {errors.registerUsername && <span className={cls.InputErrorText}>Обязательное поле</span>}
                </div>

                <div className={cls.InputWrapper}>
                    <label className={cls.InputTitle} htmlFor='registerPassword'>Пароль</label>
                    <Input
                        error={errors.registerPassword}
                        register={{...registerFormPasswordReg}}
                        id={'loginPassword'}
                        className={classNames('', {}, [])}
                        placeholder={'Введите пароль'}
                        buttonType={InputTypes.PASSWORD_INPUT}
                    />
                    {errors.registerPassword && <span className={cls.InputErrorText}>Пароль должен быть не короче 5 символов</span>}
                </div>

                <Button type={"submit"} className={cls.InputButton} fullWidth>Зарегистрироваться</Button>
                <div className={cls.FormBottomBlock}>
                    <p>Уже есть аккаунт?</p>
                    <Link to={'/login'}>Войти</Link>
                </div>
            </form>
        </div>
    )
};
