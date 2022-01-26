import { Link, useMatch, useResolvedPath } from "react-router-dom";
import SsIcon from "./SsIcon";

const SsMenu = ({menus, location}) => {

  const MenuItem = ({path , children}) => {
    let resolved = useResolvedPath(path);

    // let match = useMatch({ path: resolved.pathname, end: true})
    let match = resolved.pathname === location.pathname;

    if (path === '') {
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

  const menuList = menus.map((menu) => {
    return (
      <MenuItem key={menu.index} path={menu.path}>
        <SsIcon name={menu.icon} />
        <span className='label'>{menu.title}</span>
      </MenuItem>
    );
  });

  return (
    <ul className='ss-menu'>
      {menuList}
    </ul>
  );
};

export default SsMenu;
