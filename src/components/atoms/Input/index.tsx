import StyledInput from './styles';
import React from 'react';

export interface InputProps {
  name: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: any;
}

const Input: React.FC<InputProps> = props => <StyledInput {...props} />;

export default Input;
