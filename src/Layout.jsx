import SsMenu from "./components/SsMenu";
import SsSite from "./components/SsSite";
import SsIcon from "./components/SsIcon";
import SsBody from "./components/SsBody";
import SsHeader from "./components/SsHeader";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {

  const menus = [
    {index:'index', title:'Home',path:'/',icon:'Home'},
    {index:'icon', title:'Icon',path:'icon',icon:'Settings-suggest'},
    {index:'component', title:'Component',path:'',icon:'Table-view'},
    {index:'button', title:'Button',path:'button',icon:'Status-circle'},
    {index:'textfield', title:'Textfield',path:'textfield',icon:'Status-circle'},
    {index:'menu', title:'Page Menu',path:'menu',icon:'Status-circle'},
    {index:'pageheader', title:'Page Header',path:'pageheader',icon:'Status-circle'},
    {index:'siteheader', title:'Site Header',path:'siteheader',icon:'Status-circle'},
  ]

  const currentLocation = useLocation();

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
          <SsMenu menus={menus} location={currentLocation} />
        </div>
        <Outlet />
      </SsBody>
    </SsSite>
  );
};

export default Layout;
