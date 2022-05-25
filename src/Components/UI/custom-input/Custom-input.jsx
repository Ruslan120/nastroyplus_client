import React from "react";
import s from "./Custom-input.module.scss";

function CustomInput({ register, error, ...props }) {
  return (
    <div
      className={error ? s["custom-input"] + " " + s["custom-input--error"] : s["custom-input"]}
    >
      <input {...register} {...props} />
      {error && (
        <span className={s["input-error"]}>
          <i className="material-icons">error_outline</i>
          {error.message}
        </span>
      )}
    </div>
  );
}

export default CustomInput;
