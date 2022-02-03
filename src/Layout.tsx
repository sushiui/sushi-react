import SsMenu from "./components/SsMenu";
import SsSite from "./components/SsSite";
import SsIcon from "./components/SsIcon";
import SsBody from "./components/SsBody";
import SsHeader from "./components/SsHeader";
import SsButton from "./components/SsButton";
import { Outlet } from "react-router-dom";
import type { Menus } from "./components/SsMenu";
import { changeBackground } from "./sushi"

type Props = {
  menus: Menus,
  currentPath: string;
}

const Layout = ({menus, currentPath}:Props) => {

  return (
    <SsSite>
      <SsHeader>
        <span className='sitename'>
          <SsIcon name='Sushi' />
          Sushi Design System
        </span>
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
