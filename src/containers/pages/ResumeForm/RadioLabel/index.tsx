import RadioLabelComponent, { RadioLabelProps as RadioLabelComponentProps } from 'components/molecules/RadioLabel';
import { FieldProps } from 'formik';
import React from 'react';

export type RadioLabelProps = FieldProps &
  Pick<RadioLabelComponentProps, "id" | "label">;

const RadioLabel: React.FC<RadioLabelProps> = ({ field, form, ...props }) => {
  const { value } = field;
  const { id } = props;

  return (
    <RadioLabelComponent
      {...field}
      {...props}
      checked={id === value}
      value={id}
    />
  );
};

export default RadioLabel;
