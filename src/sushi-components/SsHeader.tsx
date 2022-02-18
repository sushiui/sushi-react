import React from "react";
import SsIcon from "./SsIcon";

type SsHeaderProps = {
  className?: string;
  children?: React.ReactNode;
}

type HeaderMenu = {
  index:string,
  title:string,
  path:string,
  leftIcon?:string,
  rightIcon?:string,
  selected?:boolean,
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

    return (
      <li key={menu.index} className={menu.path === currentPath ? 'selected' : ''}>
        <a href={menu.path}>
          {spanLeftIcon}
          <span className="label">{menu.title}</span>
          {spanRightIcon}
        </a>
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
export type { HeaderMenu };
