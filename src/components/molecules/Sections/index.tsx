import React from "react";
import "./style.sass";

const Sections: React.FC = ({ children }) => {
  const items = React.useMemo(
    () =>
      (children as React.ReactNode[]).map(child => {
        const { key } = child as {
          key: string;
          [key: string]: any;
        };

        return <li key={key}>{child}</li>;
      }),
    [children]
  );

  return <ul styleName="sections">{items}</ul>;
};

export default Sections;
