import React from "react";

import { Link } from "react-router-dom";
import SsIcon from "./SsIcon";
import { classNames } from "../utilities/css"

type Menus = {
  index:string,
  title?:string,
  path?:string,
  icon?:string,
  selected?:boolean,
  className?:string
}[]

type ssMenuProps = {
  menus: Menus,
  currentPath?: string,
}

export default function SsMenu ({menus, currentPath}:ssMenuProps) {

  type menuItemProps = {
    path?:string,
    children: React.ReactNode,
    className?: string,
  }

  const MenuItem = ({path , children, className}:menuItemProps) => {
    if (path === '' || path == null) {
      return <li><div className="header">{children}</div></li>;
    }

    const ClassName = classNames(
      (path === currentPath) && "selected",
      className && className
    )

    return (
      <li className={path === currentPath ? 'selected' : ' '}>
        <Link to={path ? path : ''}>
          {children}
        </Link>
      </li>
    );
  };

  const menuList = menus.map((menu) => {
    const spanLeftIcon:JSX.Element = menu.icon ? <SsIcon name={menu.icon} /> : <></>;
    return (
      <MenuItem key={menu.index} path={menu.path} className={menu.className} >
        {spanLeftIcon}
        <span className='label'>{menu.title ? menu.title : '\u00A0'}</span>
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
