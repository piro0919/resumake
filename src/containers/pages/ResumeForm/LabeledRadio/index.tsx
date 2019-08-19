import LabeledRadioComponent, {
  LabeledRadioProps as LabeledComponentRadioProps
} from "components/molecules/LabeledRadio";
import { FieldProps } from "formik";
import React from "react";

export type LabeledRadioProps = FieldProps &
  Pick<LabeledComponentRadioProps, "id" | "label">;

const LabeledRadio: React.FC<LabeledRadioProps> = ({
  field,
  form,
  ...props
}) => {
  const { value } = field;
  const { id } = props;

  return <LabeledRadioComponent {...field} {...props} checked={id === value} />;
};

export default LabeledRadio;
