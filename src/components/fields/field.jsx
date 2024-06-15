import { memo } from "react";
import cn from "classnames";
import style from "./field.module.scss";
export default memo(
  ({ register, name, error = false, helperText = "", type = "text", ...rest }) => {
    // Установите type в "password", если name равен "password"
    if (name === "password") {
      type = "password";
    }

    return (
      <div className={cn(style.inputField, error && style.inputField__error)}>
        <input {...register(name)} type={type} {...rest} />
        {error && <p className={style.error}>{helperText}</p>}
      </div>
    );
  }
);