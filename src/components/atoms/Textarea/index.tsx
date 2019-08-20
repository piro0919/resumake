import React from 'react';
import './style.sass';

export type TextareaProps = React.TextareaHTMLAttributes<any>;

const Textarea: React.FC<TextareaProps> = props => (
  <textarea {...props} styleName="textarea" />
);

export default Textarea;
