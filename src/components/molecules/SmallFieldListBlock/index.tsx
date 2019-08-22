import './style.scss';
import React from 'react';

interface Field {
  key: string;
  value: React.ReactNode;
}

export interface SmallFieldListBlockProps {
  fields: Field[];
  footer: React.ReactNode;
}

const SmallFieldListBlock: React.FC<SmallFieldListBlockProps> = ({
  fields,
  footer
}) => {
  const items = React.useMemo(
    () => fields.map(({ key, value }) => <li key={key}>{value}</li>),
    [fields]
  );

  return (
    <div styleName="small-field-list-block">
      <ul styleName="list">{items}</ul>
      <div>{footer}</div>
    </div>
  );
};

export default SmallFieldListBlock;
