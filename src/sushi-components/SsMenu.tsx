import React from "react";

import { Link } from "react-router-dom";
import SsIcon from "./SsIcon";

type Menus = {
  index:string,
  title:string,
  path:string,
  icon:string,
  selected?:boolean,
}[]

type ssMenuProps = {
  menus: Menus,
  currentPath: string;
}

export default function SsMenu ({menus, currentPath}:ssMenuProps) {

  type menuItemProps = {
    path:string,
    children: React.ReactNode,
  }

  const MenuItem = ({path , children}:menuItemProps) => {
    if (path === '') {
      return <li><div className="title">{children}</div></li>;
    }

    return (
      <li className={path === currentPath ? 'selected' : ''}>
        <Link to={path}>
          {children}
        </Link>
      </li>
    );
  };

  const menuList = menus.map((menu) => {
    return (
      <MenuItem key={menu.index} path={menu.path}>
        <SsIcon name={menu.icon} />
        <span className='label'>{menu.title}</span>
      </MenuItem>
    );
  });

  return (
    <ul className='ss-menu'>
      {menuList}
    </ul>
  );
};

export type {Menus};
