import React from 'react';
import './style.sass';

interface Field {
  description: React.ReactNode;
  key: string;
  term: string;
}

export interface FieldListProps {
  fields: Field[];
}

const FieldList: React.FC<FieldListProps> = ({ fields }) => {
  const items = fields.map(({ description, key, term }) => (
    <React.Fragment key={key}>
      <dt>{term}</dt>
      <dd>{description}</dd>
    </React.Fragment>
  ));

  return <dl styleName="field-list">{items}</dl>;
};

export default FieldList;
