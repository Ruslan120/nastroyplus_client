import { React, useEffect } from "react";
import "./LoginForm.scss";
import CustomInput from "../../UI/custom-input/Custom-input";
import { useForm } from "react-hook-form";
import CustomBtn from "../../UI/custom-btn/Custom-btn";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../redux/actions";

const LoginForm = (active) => {
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors,},
  } = useForm({ mode: "onSubmit" });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    //   console.log(data)
    dispatch(loginAction(data.email, data.password));
    reset();
  };

  useEffect(() => {
    setFocus("email");
  }, [active]);

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
        type="password"
        error={errors.password}
        placeholder="password"
      />
      <CustomBtn>Войти</CustomBtn>
    </form>
  );
};

export default LoginForm;
