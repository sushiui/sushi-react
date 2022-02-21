import "./App.css";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import LinkPage from "./pages/LinkPage";
import IconPage from "./pages/IconPage";
import Layout from "./Layout";
import { Routes, Route, useLocation } from "react-router-dom";
import type { Menus } from "./sushi-components/SsMenu";
import type { HeaderMenu, MegaMenu } from "./sushi-components/SsHeader";

export default function App() {

  const menus:Menus = [
    {index:'index', title:'Home',path:'/',icon:'Home'},
    {index:'icon', title:'Icon',path:'/icon',icon:'Settings-suggest'},
    {index:'component', title:'Component',path:'',icon:'Table-view'},
    {index:'button', title:'Button',path:'/button',icon:'Status-circle'},
    {index:'link', title:'Link',path:'/link',icon:'Status-circle'},
    {index:'textfield', title:'Textfield',path:'/textfield',icon:'Status-circle'},
    {index:'menu', title:'Page Menu',path:'/menu',icon:'Status-circle'},
    {index:'pageheader', title:'Page Header',path:'/pageheader',icon:'Status-circle'},
    {index:'siteheader', title:'Site Header',path:'/siteheader',icon:'Status-circle'},
  ]

  const megaMenu:MegaMenu = [
    [
      {index:'head', title:'Header', className:'header'},
      {index:'button', title:'Button',path:'/button'},
      {index:'icon', title:'Icon',path:'/icon'},
      {index:'link', title:'Link',path:'/link'},
    ],[
      {index:'head', title:'Header 2', className:'header'},
      {index:'button', title:'Button',path:'/button'},
      {index:'icon', title:'Icon',path:'/icon'},
      {index:'link', title:'Link',path:'/link'},
    ],[
      {index:'head' },
      {index:'button', title:'Button',path:'/button'},
      {index:'icon', title:'Icon',path:'/icon'},
      {index:'link', title:'Link',path:'/link'},
    ],[
      {index:'head', title:'หัวทดสอบอันที่สามแบบยาว', className:'header'},
      {index:'button', title:'ก่อนกดปุ่ม',path:'/button'},
      {index:'icon', title:'จับ icon',path:'/icon'},
      {index:'link', title:'Link',path:'/link'},
    ],[
      {index:'head' },
      {index:'button', title:'ปุ่มกด',path:'/button'},
      {index:'icon', title:'ไอคอน',path:'/icon'},
      {index:'link', title:'ลิงค์',path:'/link'},
    ]
  ]

  const headerMenu:HeaderMenu = [
    {index:'home', title:'Home', path:'/', leftIcon:'Home'},
    {index:'button', title:'Button',path:'/button'},
    {index:'link', title:'Link',path:'/link'},
    {index:'component', title:'Component',path:'',rightIcon:'Maximize-arrow', megaMenu:megaMenu},
    {index:'icon', title:'ไอคอน',path:'/icon'},
  ]

  return (
    <Routes>
      <Route path='/' element={<Layout menus={menus} headerMenu={headerMenu} currentPath={useLocation().pathname} />} >
        <Route index element={<HomePage />} />
        <Route path='/icon' element={<IconPage />} />
        <Route path='/button' element={<ButtonPage />} />
        <Route path='/link' element={<LinkPage />} />
      </Route>
    </Routes>
  );
}
