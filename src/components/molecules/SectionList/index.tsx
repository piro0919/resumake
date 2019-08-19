import './style.sass';
import React from 'react';

const SectionList: React.FC = ({ children }) => {
  const items = React.useMemo(
    () =>
      (children as React.ReactNode[]).map(child => {
        const { key } = child as {
          key: string;
          [key: string]: any;
        };

        return (
          <li key={key} styleName="item">
            {child}
          </li>
        );
      }),
    [children]
  );

  return <ul styleName="section-list">{items}</ul>;
};

export default SectionList;
