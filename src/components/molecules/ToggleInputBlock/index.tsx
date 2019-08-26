import './style.scss';
import Input, { InputProps } from 'components/atoms/Input';
import CheckboxInputLabel, {
  CheckboxInputLabelProps
} from 'components/molecules/CheckboxInputLabel';
import React from 'react';

export interface ToggleInputBlockProps
  extends CheckboxInputLabelProps,
    InputProps {
  handleChange: CheckboxInputLabelProps['onChange'];
}

const ToggleInputBlock: React.FC<ToggleInputBlockProps> = ({
  checked,
  handleChange,
  label,
  ...props
}) => (
  <div styleName="toggle-input-block">
    <div>
      <Input {...props} />
    </div>
    <div>
      <CheckboxInputLabel
        checked={checked}
        label={label}
        onChange={handleChange}
      />
    </div>
  </div>
);

export default ToggleInputBlock;
