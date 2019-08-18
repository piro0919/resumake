import TextareaComponent from 'components/atoms/Textarea';
import { FieldProps } from 'formik';
import React from 'react';

export type TextareaProps = FieldProps;

const Textarea: React.FC<TextareaProps> = ({ field, form, ...props }) => (
  <TextareaComponent {...field} {...props} />
);

export default Textarea;
