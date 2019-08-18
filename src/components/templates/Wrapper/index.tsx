import Div from './styles';
import React from 'react';
import ReactResizeDetector from 'react-resize-detector';

export interface WrapperProps {
  clientHeight: number;
  clientWidth: number;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  clientHeight,
  clientWidth
}) => {
  const [formWidth, setFormWidth] = React.useState(clientWidth / 2);
  const [pdfWidth, setPdfWidth] = React.useState(clientWidth / 2);

  const { form, pdf } = React.useMemo(
    () =>
      (children as React.ReactNode[]).reduce<{
        form?: React.ReactNode;
        pdf?: React.ReactNode;
      }>((previousValue, currentValue) => {
        const { key } = currentValue as {
          key: "form" | "pdf";
          [key: string]: any;
        };

        return { ...previousValue, [key]: currentValue };
      }, {}),
    [children]
  );

  const handleResize = React.useCallback<
    (width: number, height: number) => void
  >(
    width => {
      setPdfWidth(clientWidth - width);
    },
    [clientWidth, setPdfWidth]
  );

  React.useEffect(() => {
    setFormWidth(clientWidth / 2);
    setPdfWidth(clientWidth / 2);
  }, [clientWidth, setFormWidth, setPdfWidth]);

  return (
    <Div style={{ height: clientHeight }}>
      <div className="form" style={{ width: formWidth }}>
        <ReactResizeDetector handleWidth={true} onResize={handleResize} />
        {form}
      </div>
      <div style={{ width: pdfWidth }}>{pdf}</div>
    </Div>
  );
};

export default Wrapper;
