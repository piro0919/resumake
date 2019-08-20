import './style.sass';
import React from 'react';
import ReactResizeDetector from 'react-resize-detector';

export interface WrapperBlockProps {
  clientHeight: number;
  clientWidth: number;
}

const WrapperBlock: React.FC<WrapperBlockProps> = ({
  children,
  clientHeight,
  clientWidth
}) => {
  const [contentWidth, setFormWidth] = React.useState(clientWidth / 2);
  const [pdfWidth, setPdfWidth] = React.useState(clientWidth / 2);

  const { form, menu, pdf } = React.useMemo(
    () =>
      (children as React.ReactNode[]).reduce<{
        form?: React.ReactNode;
        menu?: React.ReactNode;
        pdf?: React.ReactNode;
      }>((previousValue, currentValue) => {
        const { key } = currentValue as {
          key: "form" | "menu" | "pdf";
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
    <div style={{ height: clientHeight }} styleName="wrapper-block">
      <div styleName="menu">{menu}</div>
      <div style={{ width: contentWidth }} styleName="form">
        <ReactResizeDetector handleWidth={true} onResize={handleResize} />
        {form}
      </div>
      <div style={{ width: pdfWidth }} styleName="pdf">
        {pdf}
      </div>
    </div>
  );
};

export default WrapperBlock;
