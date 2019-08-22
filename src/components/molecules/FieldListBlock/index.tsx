import './style.scss';
import React from 'react';

const FieldListBlock: React.FC = ({ children }) => {
  const { fieldList, footer } = React.useMemo(
    () =>
      (children as React.ReactNode[]).reduce<{
        fieldList?: React.ReactNode;
        footer?: React.ReactNode;
      }>((previousValue, currentValue) => {
        const { key } = currentValue as {
          key: 'fieldList' | 'footer';
          [key: string]: any;
        };

        return { ...previousValue, [key]: currentValue };
      }, {}),
    [children]
  );

  return (
    <div styleName="field-list-block">
      {fieldList}
      <div styleName="footer">{footer}</div>
    </div>
  );
};

export default FieldListBlock;
