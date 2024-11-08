import React from "react";
import SsIcon from "./SsIcon";
import type { Menus } from "./SsMenu";
import SsMenu from "./SsMenu";
import { Link } from "react-router-dom";

type SsHeaderProps = {
  className?: string;
  children?: React.ReactNode;
}

type MegaMenu = Array<Menus>;

type HeaderMenu = {
  index:string,
  title:string,
  path?:string,
  leftIcon?:string,
  rightIcon?:string,
  selected?:boolean,
  megaMenu?:MegaMenu,
}[]

type SsHeaderMenuProps = {
  menus: HeaderMenu;
  currentPath?: string;
}

const SsHeader = ({className, children}:SsHeaderProps) => {
  return (<div className={`header ${className ? className : ''}`}>{children}</div>);
}

SsHeader.Menu = ({menus, currentPath}:SsHeaderMenuProps) => {

  const menuList = menus.map((menu) => {

    const spanLeftIcon:JSX.Element = menu.leftIcon ? <SsIcon name={menu.leftIcon} /> : <></>;
    const spanRightIcon:JSX.Element = menu.rightIcon ? <SsIcon name={menu.rightIcon} /> : <></>;

    if(menu.megaMenu) {
      const subMenus = menu.megaMenu.map((subMenu, index) => {
        return(
          <SsMenu
            testid={`${menu.index}-${index}`}
            key={index}
            currentPath={currentPath}
            menus={subMenu}
          />
        );
      });

      return (
        <li data-testid={menu.index} key={menu.index} className="-dropdownMega">
          <a href="#">
            {spanLeftIcon}
            <span className="label">{menu.title}</span>
            &nbsp;
            <span className="ss-icon-Maximize-arrow"></span>
            <span className="ss-icon-Minimize-arrow"></span>
          </a>
          <div className="ss-mega-menu">
            <div className="row">{subMenus}</div>
          </div>
        </li>
      )
    }

    return (
      <li data-testid={menu.index} key={menu.index} className={menu.path === currentPath ? 'selected' : ''}>
        <Link to={menu.path? menu.path : "#"}>
          {spanLeftIcon}
          <span className="label">{menu.title}</span>
          {spanRightIcon}
        </Link>
      </li>
    );
  });

  return (
    <ul>
      {menuList}
    </ul>
  )
}

export default SsHeader;
export type { HeaderMenu, MegaMenu };
