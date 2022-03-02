import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../utilities/css"
import SsIcon from "./SsIcon";

type MenuItemProps = {
  testid?: string,
  path?: string,
  children: React.ReactNode,
  className?: string,
  currentPath?: string,
}

type Menus = {
  index:string,
  title?:string,
  path?:string,
  icon?:string,
  selected?:boolean,
  className?:string
}[]

type ssMenuProps = {
  testid?: string,
  menus: Menus,
  currentPath?: string,
}

const MenuItem = ({testid ,path , children, className, currentPath}:MenuItemProps) => {
  const ClassName = classNames(
    (path === currentPath) && "selected",
    className && className
  )

  if (path === '' || path == null) {
    return <li data-testid={testid}><div className="header">{children}</div></li>;
  }

  return (
    <li data-testid={testid} className={path === currentPath ? 'selected' : ' '}>
      <Link to={path ? path : ''}>
        {children}
      </Link>
    </li>
  );
};

export default function SsMenu ({testid, menus, currentPath}:ssMenuProps) {

  const menuList = menus.map((menu) => {
    const spanLeftIcon:JSX.Element = menu.icon ? <SsIcon name={menu.icon} /> : <></>;
    return (
      <MenuItem
        key={menu.index}
        testid={menu.index}
        path={menu.path}
        className={menu.className}
        currentPath={currentPath} >
        {spanLeftIcon}
        <span className='label'>{menu.title ? menu.title : '\u00A0'}</span>
      </MenuItem>
    );
  });

  return (
    <ul data-testid={testid? testid : 'ss-menu'} className='ss-menu'>
      {menuList}
    </ul>
  );
};

export type {Menus};
