import React from 'react';
import './style.scss';

export type TextareaProps = React.TextareaHTMLAttributes<any>;

const Textarea: React.FC<TextareaProps> = props => (
  <textarea {...props} styleName="textarea" />
);

export default Textarea;
