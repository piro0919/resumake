import './style.sass';
import RadioInput, { RadioInputProps } from 'components/atoms/RadioInput';
import React from 'react';

export interface RadioLabelProps extends RadioInputProps {
  label: string;
}

const RadioLabel: React.FC<RadioLabelProps> = ({ label, ...props }) => {
  const { checked } = props;

  return (
    <label styleName="radio-label">
      <div styleName={`styled-radio ${checked ? "checked" : ""}`} />
      {label}
      <RadioInput {...props} />
    </label>
  );
};

export default RadioLabel;
