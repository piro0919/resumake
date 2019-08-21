import './style.sass';
import CheckboxInput, { CheckboxInputProps } from 'components/atoms/CheckboxInput';
import React from 'react';

export interface CheckboxInputLabelProps extends CheckboxInputProps {
  label: string;
}

const CheckboxInputLabel: React.FC<CheckboxInputLabelProps> = ({
  label,
  ...props
}) => {
  const { checked } = props;

  return (
    <label styleName="checkbox-input-label">
      <div styleName="label">{label}</div>
      <div styleName={`styled-checkbox ${checked ? 'checked' : ''}`} />
      <CheckboxInput {...props} />
    </label>
  );
};

export default CheckboxInputLabel;
