import React from "react";
import ReactResizeDetector from "react-resize-detector";
import "./style.sass";

export interface WrapperProps {
  clientHeight: number;
  clientWidth: number;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  clientHeight,
  clientWidth
}) => {
  const [contentWidth, setFormWidth] = React.useState(clientWidth / 2);
  const [pdfWidth, setPdfWidth] = React.useState(clientWidth / 2);

  const { content, pdf } = React.useMemo(
    () =>
      (children as React.ReactNode[]).reduce<{
        content?: React.ReactNode;
        pdf?: React.ReactNode;
      }>((previousValue, currentValue) => {
        const { key } = currentValue as {
          key: "content" | "pdf";
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
    <div style={{ height: clientHeight }} styleName="wrapper">
      <div style={{ width: contentWidth }} styleName="content">
        <ReactResizeDetector handleWidth={true} onResize={handleResize} />
        {content}
      </div>
      <div style={{ width: pdfWidth }}>{pdf}</div>
    </div>
  );
};

export default Wrapper;
