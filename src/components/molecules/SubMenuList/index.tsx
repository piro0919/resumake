import './style.sass';
import React from 'react';

interface SubMenu {
  handleClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  key?: string;
  term: string;
}

export interface SubMenuListProps {
  subMenus: SubMenu[];
}

const SubMenuList: React.FC<SubMenuListProps> = ({ subMenus }) => {
  const items = subMenus.map(({ handleClick, term, key = term }) => (
    <li key={key} styleName="item">
      <div styleName="term" onClick={handleClick}>
        {term}
      </div>
    </li>
  ));

  return <ul styleName="sub-menu-list">{items}</ul>;
};

export default SubMenuList;
