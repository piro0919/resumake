import React from "react";
import "./style.sass";

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
    <div styleName="content-wrapper">
      <div>{header}</div>
      <div styleName="form">{form}</div>
    </div>
  );
};

export default ContentWrapper;
