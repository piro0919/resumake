import './style.scss';
import React from 'react';

const ContentBlock: React.FC = ({ children }) => (
  <div styleName="content-block">{children}</div>
);

export default ContentBlock;
