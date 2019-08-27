import './style.scss';
import React from 'react';

export interface WrapperBlockProps {
  clientHeight: number;
  clientWidth: number;
}

const WrapperBlock: React.FC<WrapperBlockProps> = ({
  children,
  clientHeight,
  clientWidth
}) => {
  const { form, menu, pdf } = React.useMemo(
    () =>
      (children as React.ReactNode[]).reduce<{
        form?: React.ReactNode;
        menu?: React.ReactNode;
        pdf?: React.ReactNode;
      }>((previousValue, currentValue) => {
        const { key } = currentValue as {
          key: 'form' | 'menu' | 'pdf';
          [key: string]: any;
        };

        return { ...previousValue, [key]: currentValue };
      }, {}),
    [children]
  );

  return (
    <div style={{ height: clientHeight }} styleName="wrapper-block">
      <header styleName="menu">{menu}</header>
      <div style={{ width: clientWidth / 2 }} styleName="form">
        {form}
      </div>
      <div styleName="pdf">{pdf}</div>
    </div>
  );
};

export default WrapperBlock;
