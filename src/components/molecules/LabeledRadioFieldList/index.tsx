import './style.scss';
import React from 'react';

interface Field {
  key: string;
  value: React.ReactNode;
}

export interface LabeledRadioFieldListProps {
  fields: Field[];
}

const LabeledRadioFieldList: React.FC<LabeledRadioFieldListProps> = ({
  fields
}) => {
  const items = React.useMemo(
    () =>
      fields.map(({ key, value }) => (
        <li styleName="item" key={key}>
          {value}
        </li>
      )),
    [fields]
  );

  return <ul styleName="labeled-radio-field-list">{items}</ul>;
};

export default LabeledRadioFieldList;
