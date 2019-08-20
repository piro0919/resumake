import './style.sass';
import React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<any>;

const Button: React.FC<ButtonProps> = ({ type = "button", ...props }) => (
  <button {...props} styleName="button" type={type} />
);

export default Button;
