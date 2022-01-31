import SsMenu from "./components/SsMenu";
import SsSite from "./components/SsSite";
import SsIcon from "./components/SsIcon";
import SsBody from "./components/SsBody";
import SsHeader from "./components/SsHeader";
import { Outlet } from "react-router-dom";
import type { Menus } from "./components/SsMenu";

type Props = {
  menus: Menus,
  currentPath: string;
}

const Layout = ({menus, currentPath}:Props) => {

  return (
    <SsSite>
      <SsHeader className=' _flex-grow-1'>
        <span className='sitename'>
          <SsIcon name='Sushi' />
          Sushi Design System
        </span>
        <div className='_flex-grow-1'></div>
        <span className='account'>
          <button className='ss-button -secondary'>
            <span className='ss-icon-Picture'></span>
            Background
          </button>
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
