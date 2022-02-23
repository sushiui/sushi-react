import React from "react";
import SsMenu from "./sushi-components/SsMenu";
import SsSite from "./sushi-components/SsSite";
import SsIcon from "./sushi-components/SsIcon";
import SsBody from "./sushi-components/SsBody";
import SsHeader from "./sushi-components/SsHeader";
import type { HeaderMenu } from "./sushi-components/SsHeader";
import SsButton from "./sushi-components/SsButton";
import { Outlet } from "react-router-dom";
import type { Menus } from "./sushi-components/SsMenu";
import { changeBackground } from "./sushi"

type Props = {
  menus: Menus,
  headerMenu: HeaderMenu,
  currentPath: string;
}

const Layout = ({menus, headerMenu, currentPath}:Props) => {

  const currentPage = `${currentPath.replace("/sushi-react/","")}-page`;

  return (
    <SsSite className={currentPage}>
      <SsHeader>
        <span className='sitename'>
          <SsIcon name='Sushi' />
          Sushi Design System
        </span>

        <SsHeader.Menu menus={headerMenu} currentPath={currentPath}/>

        <div className='_flex-grow-1'></div>
        <span className='account'>
          <SsButton
            secondary
            onClick  = {changeBackground}
            leftIcon = 'Picture'
            label    = 'Change Background'
          />
        </span>
      </SsHeader>
      <SsBody>
        <div className='menu-panel'>
          <SsMenu menus={menus} currentPath={currentPath} />
        </div>
        <Outlet />
      </SsBody>
    </SsSite>
  );
};

export default Layout;
