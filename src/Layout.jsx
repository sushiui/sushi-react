import SsMenu from "./components/ss-menu";
import SsSite from "./components/ss-site";
import SsIcon from "./components/ss-icon";
import SsBody from "./components/ss-body";
import SsHeader from "./components/ss-header";
import { Outlet } from "react-router-dom";

const Layout = () => {
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
        <SsMenu />
        <Outlet />
      </SsBody>
    </SsSite>
  );
};

export default Layout;
