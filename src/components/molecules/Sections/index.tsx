import Ul from './styles';
import React from 'react';

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

  return <Ul>{items}</Ul>;
};

export default Sections;
