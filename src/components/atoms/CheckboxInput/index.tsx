import React from 'react';

export type CheckboxInputProps = Omit<React.InputHTMLAttributes<any>, 'type'>;

const CheckboxInput: React.FC<CheckboxInputProps> = props => (
  <input {...props} type="checkbox" />
);

export default CheckboxInput;
