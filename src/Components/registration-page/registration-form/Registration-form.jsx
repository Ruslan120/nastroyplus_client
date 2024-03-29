import React from "react";
import s from "./Registration-form.module.scss";
import { useForm } from "react-hook-form";
import CustomInput from "../../UI/custom-input/Custom-input";
import CustomBtn from "../../UI/custom-btn/Custom-btn";
import { registrationAction } from "../../../redux/actions";
import { useDispatch } from "react-redux";

function RegistrationForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    dispatch(registrationAction(data.email, data.password));
    reset();
  };

  return (
    <form className={s["registration-form"]} onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        autoFocus={true}
        register={register("email", {
          required: "Обязательное поле",
          pattern: {
            value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
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
        type="password"
      />
      <CustomInput
        register={register("repeatPassword", {
          required: "Обязательное поле",
          validate: (value) =>
            value === getValues("password") || "Пароли не совпадают",
        })}
        error={errors.repeatPassword}
        placeholder="repeat-password"
        type="password"
      />
      <CustomBtn disabled={!isValid} style={{ alignSelf: "flex-start" }}>
        Зарегистрироваться
      </CustomBtn>
    </form>
  );
}

export default RegistrationForm;
