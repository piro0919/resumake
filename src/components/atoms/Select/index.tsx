import './style.sass';
import React from 'react';

export type SelectProps = React.SelectHTMLAttributes<any>;

const Select: React.FC<SelectProps> = props => (
  <select {...props} styleName="select" />
);

export default Select;
