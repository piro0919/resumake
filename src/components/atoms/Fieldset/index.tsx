import './style.scss';
import React from 'react';

export interface FieldsetProps {
  legend: string;
}

const Fieldset: React.FC<FieldsetProps> = ({ children, legend }) => (
  <fieldset styleName="fieldset">
    <legend styleName="legend">{legend}</legend>
    {children}
  </fieldset>
);

export default Fieldset;
