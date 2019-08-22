import './style.scss';
import React from 'react';

interface Project {
  key: string;
  node: React.ReactNode;
}

export interface ProjectListBlockProps {
  footer: React.ReactNode;
  projects: Project[];
}

const ProjectListBlock: React.FC<ProjectListBlockProps> = ({
  footer,
  projects
}) => {
  const items = projects.map(({ key, node }, index) => (
    <React.Fragment key={key}>
      <dt styleName="term">{`経歴${index + 1}`}</dt>
      <dd styleName="definition">{node}</dd>
    </React.Fragment>
  ));

  return (
    <div styleName="project-list-block">
      <dl styleName="project-list">{items}</dl>
      <div>{footer}</div>
    </div>
  );
};

export default ProjectListBlock;
