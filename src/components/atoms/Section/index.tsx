import React from "react";
import "./style.sass";

export interface SectionProps {
  heading: string;
}

const Section: React.FC<SectionProps> = ({ children, heading }) => (
  <section styleName="section">
    <h2 styleName="heading">{heading}</h2>
    {children}
  </section>
);

export default Section;
