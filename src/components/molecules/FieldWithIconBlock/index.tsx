import './style.sass';
import React from 'react';

const FieldWithIconBlock: React.FC = ({ children }) => {
  const { field, icon } = React.useMemo(
    () =>
      (children as React.ReactNode[]).reduce<{
        field?: React.ReactNode;
        icon?: React.ReactNode;
      }>((previousValue, currentValue) => {
        const { key } = currentValue as {
          key: 'field' | 'icon';
          [key: string]: any;
        };

        return { ...previousValue, [key]: currentValue };
      }, {}),
    [children]
  );

  return (
    <div styleName="field-with-icon-block">
      {field}
      {icon}
    </div>
  );
};

export default FieldWithIconBlock;
