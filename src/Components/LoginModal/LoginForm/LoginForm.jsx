import {React, useEffect} from "react";
import s from "./LoginForm.module.scss";
import CustomInput from "../../UI/custom-input/Custom-input";
import {useForm} from "react-hook-form";
import CustomBtn from "../../UI/custom-btn/Custom-btn";
import {useDispatch} from "react-redux";
import {loginAction} from "../../../redux/actions";
import {useNavigate} from "react-router-dom";

const LoginForm = ({active, close, ...props}) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setFocus,
        reset,
        formState: {errors,},
    } = useForm({mode: "onSubmit"});
    const dispatch = useDispatch();
    const onSubmit = (data) => {
        dispatch(loginAction(data.email, data.password));
        close();
        reset();
    };
    const onRegistration = () => {
        navigate("/registration")
        close();
    };

    useEffect(() => {
        setFocus("email");
    }, [active]);

    return (
        <form className={s["login-form"]} onSubmit={handleSubmit(onSubmit)}>
            <CustomInput
                register={register("email", {
                    required: "Обязательное поле",
                })}
                error={errors.email}
                placeholder="email"
            />
            <CustomInput
                register={register("password", {
                    required: "Обязательное поле",
                })}
                type="password"
                error={errors.password}
                placeholder="password"
            />
            <div className={s["login-form__footer"]}>
                <CustomBtn>Войти</CustomBtn>
                <span onClick={onRegistration} className={s["login-form__registration"]}>Зарегистрироваться</span>
            </div>
        </form>
    );
};

export default LoginForm;
