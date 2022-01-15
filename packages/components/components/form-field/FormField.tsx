import { InputHTMLAttributes } from "react";
import cn from "classnames";
import "./index.css";

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  state?: "loading" | "error" | "warning" | "success";
  label?: string;
}

export const FormField = ({ name, label, state, ...rest }: FormFieldProps) => {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <input name={name} {...rest} />
    </div>
  );
};

export default FormField;
