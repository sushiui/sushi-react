import SsMenu from "./components/ss-menu";
import SsSite from "./components/ss-site";
import SsIcon from "./components/ss-icon";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <SsSite>
      <SsSite.Header className=' _flex-grow-1'>
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
      </SsSite.Header>
      <SsSite.Body>
        <SsMenu />
        <Outlet />
      </SsSite.Body>
    </SsSite>
  );
};

export default Layout;
