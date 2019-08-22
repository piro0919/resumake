import './style.scss';
import React from 'react';

interface Process {
  description: React.ReactNode;
  key?: string;
  term: string;
}

export interface ProcessListProps {
  processes: Process[];
}

const ProcessList: React.FC<ProcessListProps> = ({ processes }) => {
  const items = processes.map(({ description, term, key = term }) => (
    <li key={key}>{description}</li>
  ));

  return <ul styleName="process-list">{items}</ul>;
};

export default ProcessList;
