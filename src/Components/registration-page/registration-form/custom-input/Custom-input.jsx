import React from "react";
import "./Custom-input.scss";

function CustomInput({ register, error, ...props }) {
  return (
    <div
      className={error ? "custom-input custom-input--error" : "custom-input"}
    >
      <input {...register} {...props} />
      {error && (
        <span className="input-error">
          <i className="material-icons">error_outline</i>
          {error.message}
        </span>
      )}
    </div>
  );
}

export default CustomInput;
