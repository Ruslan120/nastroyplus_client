import React from "react";
import "./Registration-form.scss";
import { useForm } from "react-hook-form";
import CustomInput from "./custom-input/Custom-input";

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => console.log(data);

  return (
    <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        register={register("email", {
          required: "Обязательное поле",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
            message: "Введите корректный email",
          },
        })}
        error={errors.email}
        placeholder="email"
      />
      <CustomInput
        register={register("password", { required: "Обязательное поле" })}
        error={errors.password}
        placeholder="password"
      />
      <CustomInput
        register={register("repeatPassword", {
          required: "Обязательное поле",
          validate: (value) => value === getValues("password") || "Пароли не совпадают",
        })}
        error={errors.repeatPassword}
        placeholder="repeat-password"
      />
      <button className="registration__btn" disabled={!isValid}>Зарегистрироваться</button>
    </form>
  );
}

export default RegistrationForm;
