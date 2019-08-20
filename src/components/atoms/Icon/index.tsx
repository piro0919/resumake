import React from 'react';
import { IconBaseProps, IconType } from 'react-icons';

export interface IconProps extends IconBaseProps {
  iconType: IconType;
}

const Icon: React.FC<IconProps> = ({
  color = "#d22f7d",
  iconType: IconType,
  size = "100%"
}) => <IconType color={color} size={size} />;

export default Icon;
