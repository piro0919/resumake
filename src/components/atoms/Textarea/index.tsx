import StyledTextarea from './styles';
import React from 'react';

export interface TextareaProps {
  name: string;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  value: any;
}

const Textarea: React.FC<TextareaProps> = props => (
  <StyledTextarea {...props} />
);

export default Textarea;
