import React from "react";
import SsPage from "../sushi-components/SsPage";
import SsHeader from "../sushi-components/SsHeader";
import SsBody from "../sushi-components/SsBody";
import SsMenu from "../sushi-components/SsMenu";
import { Menus } from "../sushi-components/SsMenu";
import SsMenuWoven from "../sushi-components/SsMenuWoven";
import { MenusWoven } from "../sushi-components/SsMenuWoven";
import SsCard from "../sushi-components/SsCard";

const menus:Menus = [
  {index:'index', title:'Home',path:`#`,icon:'Home'},
  {index:'icon', title:'Icon',path:`#`,icon:'Settings-suggest'},
  {index:'component', title:'Component',path:'',icon:'Table-view'},
  {index:'button', title:'Button',path:`#`,icon:'Status-circle'},
  {index:'link', title:'Link',path:`#`,icon:'Status-circle'},
  {index:'menu', title:'Menu',path:`menu`,icon:'Status-circle'},
  {index:'textfield', title:'Textfield',path:'#',icon:'Status-circle'},
  {index:'pageheader', title:'Page Header',path:'#',icon:'Status-circle'},
  {index:'siteheader', title:'Site Header',path:'#',icon:'Status-circle'},
]

const menusWoven:MenusWoven = [
  {index:'index', title:'Home',path:`#`, header:true},
  {index:'icon', title:'Icon',path:`#`},
  {index:'component', title:'Component',path:'', header:true},
  {index:'button', title:'Button',path:`#`},
  {index:'link', title:'Link',path:`#`},
  {index:'menu', title:'Menu',path:`menu`},
  {index:'textfield', title:'Textfield',path:'#'},
  {index:'pageheader', title:'Page Header',path:'#'},
  {index:'siteheader', title:'Site Header',path:'#'},
]

const currentPath = "menu"

const MenuPage = () => {
  return (
    <SsPage>
      <SsHeader className='-nobreadcrumbs'>
        <span className='label'>Menu</span>
      </SsHeader>
      <SsBody>
        <SsCard title='&lt;SsMenu /&gt;'>
          <SsBody>
            <div className='menu-panel'>
              <SsMenu menus={menus} currentPath={currentPath} />
            </div>
          </SsBody>
        </SsCard>
        <SsCard title='&lt;SsMenuWoven /&gt;'>
          <SsBody>
            <div className='menu-panel'>
              <SsMenuWoven menus={menusWoven} currentPath={currentPath} />
            </div>
          </SsBody>
        </SsCard>
      </SsBody>
    </SsPage>
  )
}

export default MenuPage