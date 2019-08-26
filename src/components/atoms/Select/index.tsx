import './style.scss';
import React from 'react';

export type SelectProps = React.SelectHTMLAttributes<any>;

const Select: React.FC<SelectProps> = props => (
  <div styleName="select">
    <select {...props} styleName="styled-select" />
  </div>
);

export default Select;
