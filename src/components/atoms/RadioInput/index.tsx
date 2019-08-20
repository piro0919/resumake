import React from 'react';

export type RadioInputProps = Exclude<React.InputHTMLAttributes<any>, 'type'>;

const RadioInput: React.FC<RadioInputProps> = props => (
  <input {...props} type="radio" />
);

export default RadioInput;
