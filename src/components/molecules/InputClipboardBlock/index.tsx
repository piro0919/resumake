import './style.scss';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import Input, { InputProps } from 'components/atoms/Input';
import React from 'react';
import { GoClippy } from 'react-icons/go';

export type InputClipboardBlockProps = Pick<InputProps, 'id' | 'value'>;

const InputClipboardBlock: React.FC<InputClipboardBlockProps> = ({
  id,
  value
}) => (
  <div styleName="input-clipboard-block">
    <Input id={id} readOnly={true} styleName="input" value={value} />
    <Button data-clipboard-target={id}>
      <Icon color="#fff" iconType={GoClippy} size={15} />
    </Button>
  </div>
);

export default InputClipboardBlock;
