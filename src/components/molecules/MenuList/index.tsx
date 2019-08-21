import './style.sass';
import React from 'react';

interface Menu {
  description: React.ReactNode;
  key?: string;
  term: string;
}

export interface MenuListProps {
  menus: Menu[];
}

const MenuList: React.FC<MenuListProps> = ({ menus }) => {
  const items = menus.map(({ description, term, key = term }) => (
    <li key={key} styleName="item">
      <div styleName="term">{term}</div>
      <div styleName="description">{description}</div>
    </li>
  ));

  return <ul styleName="menu-list">{items}</ul>;
};

export default MenuList;
