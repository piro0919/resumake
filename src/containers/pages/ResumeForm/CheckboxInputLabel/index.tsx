import CheckboxInputLabelComponent, {
  CheckboxInputLabelProps as CheckboxInputLabelComponentProps
} from 'components/molecules/CheckboxInputLabel';
import { FieldProps } from 'formik';
import React from 'react';

export type CheckboxInputLabelProps = FieldProps &
  Pick<CheckboxInputLabelComponentProps, 'label'>;

const CheckboxInputLabel: React.FC<CheckboxInputLabelProps> = ({
  field,
  form,
  ...props
}) => {
  const { value } = field;

  return (
    <CheckboxInputLabelComponent {...field} {...props} checked={!!value} />
  );
};

export default CheckboxInputLabel;
