import SelectLabelComponent, { SelectLabelProps as SelectLabelComponentProps } from 'components/molecules/SelectLabel';
import { FieldProps } from 'formik';
import React from 'react';

export type SelectLabelProps = FieldProps &
  Pick<SelectLabelComponentProps, "label">;

const SelectLabel: React.FC<SelectLabelProps> = ({ field, form, ...props }) => (
  <SelectLabelComponent {...field} {...props} />
);

export default SelectLabel;
