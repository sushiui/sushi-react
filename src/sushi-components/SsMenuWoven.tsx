import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../utilities/css"
import SsIcon from "./SsIcon";

type MenuItemProps = {
  testid?: string,
  path?: string,
  header?: boolean,
  className?: string,
  currentPath?: string,
  children: React.ReactNode,
}

type MenusWoven = {
  index:string,
  title?:string,
  path?:string,
  header?:boolean,
  selected?:boolean,
  className?:string
}[]

type ssMenuProps = {
  testid?: string,
  menus: MenusWoven,
  currentPath?: string,
}

const MenuItem = ({testid ,path , children, className, currentPath, header}:MenuItemProps) => {
  const _className = classNames(
    (path === currentPath) && "selected",
    className && className
  );

  const _circleClassName = header? "circle -big" : "circle";

  return (
    <li data-testid={testid} className={_className}>
      <div className="relative">
        <div className="line">
          <div className="top"></div>
          <div className="background"></div>
          <div className="bottom"></div>
        </div>
      </div>
      <Link to={path ? path : ''}>
        <div className="status">
          <div className={_circleClassName}>&nbsp;</div>
        </div><span className="label">{children}</span>
      </Link>
    </li>
  );
};

export default function SsMenuWoven ({testid, menus, currentPath}:ssMenuProps) {

  const menuList = menus.map((menu) => {
    return (
      <MenuItem
        key={menu.index}
        testid={menu.index}
        path={menu.path}
        header={menu.header}
        className={menu.className}
        currentPath={currentPath} >
        <span className='label'>{menu.title ? menu.title : '\u00A0'}</span>
      </MenuItem>
    );
  });

  return (
    <ul data-testid={testid? testid : 'ss-menu-woven'} className='ss-menu-woven'>
      {menuList}
    </ul>
  );
};

export type { MenusWoven };
