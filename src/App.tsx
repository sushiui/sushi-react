import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import LinkPage from "./pages/LinkPage";
import IconPage from "./pages/IconPage";
import MenuPage from "./pages/MenuPage";
import Layout from "./Layout";
import { Routes, Route, useLocation } from "react-router-dom";
import type { Menus } from "./sushi-components/SsMenu";
import type { HeaderMenu, MegaMenu } from "./sushi-components/SsHeader";

export default function App() {

  const base = "sushi-react/"

  const menus:Menus = [
    {index:'index', title:'Home', path:'/',icon:'Home'},
    {index:'icon', title:'Icon', path:'/icon',icon:'Settings-suggest'},
    {index:'component', title:'Component', path:'',icon:'Table-view'},
    {index:'button', title:'Button', path:'/button',icon:'Status-circle'},
    {index:'link', title:'Link', path:'/link',icon:'Status-circle'},
    {index:'menu', title:'Menu', path:'/menu',icon:'Status-circle'},
    {index:'textfield', title:'Textfield (soon)',path:'/textfield',icon:'Status-circle'},
    {index:'pageheader', title:'Page Header (soon)',path:'/pageheader',icon:'Status-circle'},
    {index:'siteheader', title:'Site Header (soon)',path:'/siteheader',icon:'Status-circle'},
  ]

  const megaMenu:MegaMenu = [
    [
      {index:'head1', title:'Header', className:'header'},
      {index:'button1', title:'Button',path:'/button'},
      {index:'icon1', title:'Icon',path:'/icon'},
      {index:'link1', title:'Link',path:'/link'},
    ],[
      {index:'head2', title:'Header 2', className:'header'},
      {index:'button2', title:'Button',path:'/button'},
      {index:'icon2', title:'Icon',path:'/icon'},
      {index:'link2', title:'Link',path:'/link'},
    ],[
      {index:'head3' },
      {index:'button3', title:'Button',path:'/button'},
      {index:'icon3', title:'Icon',path:'/icon'},
      {index:'link3', title:'Link',path:'/link'},
    ],[
      {index:'head4', title:'หัวทดสอบอันที่สามแบบยาว', className:'header'},
      {index:'button4', title:'ก่อนกดปุ่ม',path:'/button'},
      {index:'icon4', title:'จับ icon',path:'/icon'},
      {index:'link4', title:'Link',path:'/link'},
    ],[
      {index:'head5' },
      {index:'button5', title:'ปุ่มกด',path:'/button'},
      {index:'icon5', title:'ไอคอน',path:'/icon'},
      {index:'link5', title:'ลิงค์',path:'/link'},
    ]
  ]

  const headerMenu:HeaderMenu = [
    {index:'home6', title:'Home', path:'/', leftIcon:'Home'},
    {index:'button6', title:'Button', path:'/button'},
    {index:'link6', title:'Link', path:'/link'},
    {index:'component6', title:'Component', path:'',rightIcon:'Maximize-arrow', megaMenu:megaMenu},
    {index:'icon6', title:'ไอคอน', path:'/icon'},
  ]

  return (
    <Routes>
      <Route path="/" element={ <Layout
          menus={menus}
          headerMenu={headerMenu}
          currentPath={useLocation().pathname} /> } >
        <Route index element={<HomePage />} />
        <Route path="icon" element={<IconPage />} />
        <Route path="button" element={<ButtonPage />} />
        <Route path="link" element={<LinkPage />} />
        <Route path="menu" element={<MenuPage />} />
      </Route>
    </Routes>
  );
}
