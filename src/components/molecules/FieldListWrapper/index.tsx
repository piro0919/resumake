import React from "react";
import "./style.sass";

const FieldListWrapper: React.FC = ({ children }) => {
  const { fieldList, footer } = React.useMemo(
    () =>
      (children as React.ReactNode[]).reduce<{
        fieldList?: React.ReactNode;
        footer?: React.ReactNode;
      }>((previousValue, currentValue) => {
        const { key } = currentValue as {
          key: "fieldList" | "footer";
          [key: string]: any;
        };

        return { ...previousValue, [key]: currentValue };
      }, {}),
    [children]
  );

  return (
    <div styleName="field-list-wrapper">
      {fieldList}
      <div styleName="footer">{footer}</div>
    </div>
  );
};

export default FieldListWrapper;
