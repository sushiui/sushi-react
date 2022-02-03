import { Link, useMatch, useResolvedPath } from "react-router-dom";
import SsIcon from "./SsIcon";

type Menus = {
  index:string,
  title:string,
  path:string,
  icon:string
}[]

type Props = {
  menus: Menus,
  location: Partial<Location>;
}

const SsMenu = ({menus, location}:Props) => {

  type Props = {
    path:string,
    children: React.ReactNode,
  }

  const MenuItem = ({path , children}:Props) => {
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
export type {Menus};
