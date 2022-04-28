import {React} from 'react';
import "./LoginForm.scss";
import CustomInput from "../../UI/custom-input/Custom-input";
import {useForm} from "react-hook-form";
import CustomBtn from "../../UI/custom-btn/Custom-btn";


const LoginForm = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: {errors, isValid},
    } = useForm({mode: "onBlur"});
    const onSubmit = (data) => console.log(data);

    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
                error={errors.password}
                placeholder="password"
            />
            <CustomBtn disabled={!isValid}>Войти</CustomBtn>
        </form>

    );
};

export default LoginForm;