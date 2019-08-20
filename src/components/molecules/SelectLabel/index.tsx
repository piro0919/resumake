import './style.sass';
import Select, { SelectProps } from 'components/atoms/Select';
import React from 'react';

export interface SelectLabelProps extends SelectProps {
  label: string;
}

const SelectLabel: React.FC<SelectLabelProps> = ({ label, ...props }) => (
  <label styleName="select-label">
    <div styleName="styled-select">
      <Select {...props} />
    </div>
    {label}
  </label>
);

export default SelectLabel;
