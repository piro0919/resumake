import ToggleInputBlockComponent, {
  ToggleInputBlockProps as ToggleInputBlockComponentProps
} from 'components/molecules/ToggleInputBlock';
import { FieldProps } from 'formik';
import React from 'react';

export type ToggleInputBlockProps = FieldProps &
  Pick<ToggleInputBlockComponentProps, 'checked' | 'label'>;

const ToggleInputBlock: React.FC<ToggleInputBlockProps> = ({
  field,
  form: { setFieldValue },
  ...props
}) => {
  const { name, value } = field;
  // TODO: エラー出てる
  const handleChange = React.useCallback(() => {
    setFieldValue(name, value === undefined ? '' : undefined);
  }, [name, setFieldValue, value]);

  return (
    <ToggleInputBlockComponent
      {...field}
      {...props}
      checked={value === undefined}
      disabled={value === undefined}
      handleChange={handleChange}
    />
  );
};

export default ToggleInputBlock;
