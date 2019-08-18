import Div from './styles';
import React from 'react';

const ContentWrapper: React.FC = ({ children }) => {
  const { form, header } = React.useMemo(
    () =>
      (children as React.ReactNode[]).reduce<{
        form?: React.ReactNode;
        header?: React.ReactNode;
      }>((previousValue, currentValue) => {
        const { key } = currentValue as {
          key: "form" | "header";
          [key: string]: any;
        };

        return { ...previousValue, [key]: currentValue };
      }, {}),
    [children]
  );

  return (
    <Div>
      <div>{header}</div>
      <div className="form">{form}</div>
    </Div>
  );
};

export default ContentWrapper;
