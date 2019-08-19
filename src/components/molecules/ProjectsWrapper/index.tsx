import React from "react";
import "./style.sass";

interface Project {
  key: string;
  node: React.ReactNode;
}

export interface ProjectsWrapperProps {
  footer: React.ReactNode;
  projects: Project[];
}

const ProjectsWrapper: React.FC<ProjectsWrapperProps> = ({
  footer,
  projects
}) => {
  const items = projects.map(({ key, node }, index) => (
    <React.Fragment key={key}>
      <dt>{`経歴${index + 1}`}</dt>
      <dd>{node}</dd>
    </React.Fragment>
  ));

  return (
    <div styleName="projects-wrapper">
      <dl styleName="projects">{items}</dl>
      <div>{footer}</div>
    </div>
  );
};

export default ProjectsWrapper;
