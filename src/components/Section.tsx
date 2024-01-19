import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section id={title.toLowerCase()} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
