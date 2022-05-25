import React from "react";
import s from "./Registration-page.module.scss";
import registration_image from "../../assets/registered.png";
import RegistrationForm from "./registration-form/Registration-form";

const RegistrationPage = (props) => {
  return (
    <div className={s["registration"]}>
      <div className={s["container"]}>
        <div className={s["wrapper-form"]}>
          <h1 className={s["registration__header"]}>Регистрация</h1>

          <div className={s["registration__content"]}>
            <div className={s["registration__main"]}>
              <RegistrationForm />
            </div>
            <div className={s["registration__image"]}>
              <img src={registration_image} alt="ff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
