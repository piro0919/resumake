import StyledSection from './styles';
import React from 'react';

export interface SectionProps {
  heading: string;
}

const Section: React.FC<SectionProps> = ({ children, heading }) => (
  <StyledSection>
    <h2 className="heading">{heading}</h2>
    {children}
  </StyledSection>
);

export default Section;
