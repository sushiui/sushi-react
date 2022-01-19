import react from "react";

const SSMenu = (props) => {
  return (
    <div className='menu'>
      <ul className='ss-menu'>
        <li className='selected'>
          <a href='index.html'>
            <span className='ss-icon-Home'></span>
            <span className='label'>Home</span>
            <div className='selected-box'>&nbsp;</div>
          </a>
        </li>
        <li>
          <a href='icon.html'>
            <span className='ss-icon-Settings-suggest'></span>
            <span className='label'>Icon</span>
          </a>
        </li>
        <li>
          <a href='abc.html'>
            <span className='ss-icon-Table-view'></span>
            <span className='label'>Component</span>
            <span className='ss-icon-Maximize-arrow'></span>
          </a>
        </li>
        <li>
          <a href='button.html'>
            <span className='ss-icon-Status-circle'></span>
            <span className='label'>Button</span>
          </a>
        </li>
        <li>
          <a href='textfield.html'>
            <span className='ss-icon-Status-circle'></span>
            <span className='label'>Textfield</span>
          </a>
        </li>
        <li>
          <a href='menu.html'>
            <span className='ss-icon-Status-circle'></span>
            <span className='label'>Page Menu</span>
          </a>
        </li>
        <li>
          <a href='pageheader.html'>
            <span className='ss-icon-Status-circle'></span>
            <span className='label'>Page Header</span>
          </a>
        </li>
        <li>
          <a href='siteheader.html'>
            <span className='ss-icon-Status-circle'></span>
            <span className='label'>Site Header</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SSMenu;
