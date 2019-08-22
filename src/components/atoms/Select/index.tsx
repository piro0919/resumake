import './style.scss';
import React from 'react';
import Measure from 'react-measure';

export type SelectProps = React.SelectHTMLAttributes<any>;

const Select: React.FC<SelectProps> = props => {
  const [selectWidth, setSelectWidth] = React.useState(0);

  return (
    <div
      style={{ width: selectWidth > 0 ? selectWidth + 20 : 'auto' }}
      styleName="select"
    >
      <Measure
        bounds={true}
        onResize={({ bounds }) => {
          if (!bounds || selectWidth) {
            return;
          }

          const { width } = bounds;

          setSelectWidth(width);
        }}
      >
        {({ measureRef }) => (
          <select {...props} ref={measureRef} styleName="styled-select" />
        )}
      </Measure>
    </div>
  );
};

export default Select;
