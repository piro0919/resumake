import React from "react";
import Radio, { RadioProps } from "components/atoms/Radio";
import "./style.sass";

export interface LabeledRadioProps extends RadioProps {
  label: string;
}

const LabeledRadio: React.FC<LabeledRadioProps> = ({ label, ...props }) => {
  const { checked } = props;

  return (
    <label styleName="labeled-radio">
      <div styleName={`styled-radio ${checked ? "checked" : ""}`} />
      {label}
      <div styleName="radio">
        <Radio {...props} />
      </div>
    </label>
  );
};

export default LabeledRadio;
