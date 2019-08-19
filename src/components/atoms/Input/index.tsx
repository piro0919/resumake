import "./style.sass";
import React from "react";

export interface InputProps
  extends Exclude<React.InputHTMLAttributes<any>, "type"> {
  type?: "number" | "text";
}

const Input: React.FC<InputProps> = ({ type = "text", ...props }) => (
  <input {...props} styleName="input" type={type} />
);

export default Input;
