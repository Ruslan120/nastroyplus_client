import React from "react";
import "./Registration-page.scss";
import registration_image from "../../assets/registered.png";
import RegistrationForm from "./registration-form/Registration-form";

const RegistrationPage = ({ active, setActive }) => {
  return (
    <div className="registration">
      <div className="container">
        <div className="wrapper-form">
          <h1 className="registration__header">Регистрация</h1>

          <div className="registration__content">
            <div className="registration__main">
              <RegistrationForm />
            </div>
            <div className="registration__image">
              <img src={registration_image} alt="ff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
