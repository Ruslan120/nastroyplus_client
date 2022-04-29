import React from "react";
import "./Registration-form.scss";
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
    <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        autoFocus={true}
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
          validate: (value) =>
            value === getValues("password") || "Пароли не совпадают",
        })}
        error={errors.repeatPassword}
        placeholder="repeat-password"
      />
      <CustomBtn disabled={!isValid} style={{ alignSelf: "flex-start" }}>
        Зарегистрироваться
      </CustomBtn>
    </form>
  );
}

export default RegistrationForm;
