import React from "react";
import SsPage from "../sushi-components/SsPage";
import SsHeader from "../sushi-components/SsHeader";
import SsBody from "../sushi-components/SsBody";
import SsMenu from "../sushi-components/SsMenu";
import { Menus } from "../sushi-components/SsMenu";
import SsCard from "../sushi-components/SsCard";

const menus:Menus = [
  {index:'index', title:'Home',path:`#`,icon:'Home'},
  {index:'icon', title:'Icon',path:`#`,icon:'Settings-suggest'},
  {index:'component', title:'Component',path:'',icon:'Table-view'},
  {index:'button', title:'Button',path:`#`,icon:'Status-circle'},
  {index:'link', title:'Link',path:`#`,icon:'Status-circle'},
  {index:'menu', title:'Menu',path:`#`,icon:'Status-circle'},
  {index:'textfield', title:'Textfield',path:'#',icon:'Status-circle'},
  {index:'pageheader', title:'Page Header',path:'#',icon:'Status-circle'},
  {index:'siteheader', title:'Site Header',path:'#',icon:'Status-circle'},
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
      </SsBody>
    </SsPage>
  )
}

export default MenuPage