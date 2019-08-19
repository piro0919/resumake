import React from "react";
import "./style.sass";

export type ButtonProps = React.ButtonHTMLAttributes<any>;

const Button: React.FC<ButtonProps> = props => (
  <button styleName="button" {...props} />
);

export default Button;
