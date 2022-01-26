import { Link } from "react-router-dom";
import SsIcon from "./SsIcon";

const SsMenu = (props) => {
  return (
    <div className='menu'>
      <ul className='ss-menu'>
        <li className='selected'>
          <Link to="/">
            <SsIcon name='Home' />
            <span className='label'>Home</span>
            <div className='selected-box'>&nbsp;</div>
          </Link>
        </li>
        <li>
          <a href='icon.html'>
            <SsIcon name='Settings-suggest' />
            <span className='label'>Icon</span>
          </a>
        </li>
        <li>
          <a href='abc.html'>
            <SsIcon name='Table-view' />
            <span className='label'>Component</span>
            <span className='ss-icon-Maximize-arrow'></span>
          </a>
        </li>
        <li>
          <Link to="/button">
            <SsIcon name='Status-circle' />
            <span className='label'>Button</span>
          </Link>
        </li>
        <li>
          <a href='textfield.html'>
            <SsIcon name='Status-circle' />
            <span className='label'>Textfield</span>
          </a>
        </li>
        <li>
          <a href='menu.html'>
            <SsIcon name='Status-circle' />
            <span className='label'>Page Menu</span>
          </a>
        </li>
        <li>
          <a href='pageheader.html'>
            <SsIcon name='Status-circle' />
            <span className='label'>Page Header</span>
          </a>
        </li>
        <li>
          <a href='siteheader.html'>
            <SsIcon name='Status-circle' />
            <span className='label'>Site Header</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SsMenu;
