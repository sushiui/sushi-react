import { Link, useMatch, useResolvedPath } from "react-router-dom";
import SsIcon from "./SsIcon";

const SsMenu = (props) => {

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

  const CustomLink = ({path , children}) => {
    let resolved = useResolvedPath(path);
    let match = useMatch({ path: resolved.pathname, end: true})

    if (path == '') {
      return <li><div className="title">{children}</div></li>;
    }

    return (
      <li className={match ? 'selected' : ''}>
        <Link to={path}>
          {children}
        </Link>
      </li>
    );
  };

  const menuHTML = menus.map((menu) => {
    return (
      <CustomLink key={menu.index} path={menu.path}>
        <SsIcon name={menu.icon} />
        <span className='label'>{menu.title}</span>
      </CustomLink>
    );
  });

  return (
    <ul className='ss-menu'>
      {menuHTML}
    </ul>
  );
};

export default SsMenu;
