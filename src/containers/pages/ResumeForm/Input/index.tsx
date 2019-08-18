import InputComponent from 'components/atoms/Input';
import { FieldProps } from 'formik';
import React from 'react';

export type InputProps = FieldProps;

const Input: React.FC<InputProps> = ({ field, form, ...props }) => (
  <InputComponent {...field} {...props} />
);

export default Input;
