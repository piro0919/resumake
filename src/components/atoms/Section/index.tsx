import './style.sass';
import React from 'react';

export interface SectionProps {
  heading: string;
}

// TODO: fieldset に変更
const Section: React.FC<SectionProps> = ({ children, heading }) => (
  <section styleName="section">
    <h2 styleName="heading">{heading}</h2>
    {children}
  </section>
);

export default Section;
