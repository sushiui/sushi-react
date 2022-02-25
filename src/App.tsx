import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import LinkPage from "./pages/LinkPage";
import IconPage from "./pages/IconPage";
import Layout from "./Layout";
import { Routes, Route, useLocation } from "react-router-dom";
import type { Menus } from "./sushi-components/SsMenu";
import type { HeaderMenu, MegaMenu } from "./sushi-components/SsHeader";

export default function App() {

  const base = "/sushi-react/"

  const menus:Menus = [
    {index:'index', title:'Home',path:`${base}`,icon:'Home'},
    {index:'icon', title:'Icon',path:`${base}icon`,icon:'Settings-suggest'},
    {index:'component', title:'Component',path:'',icon:'Table-view'},
    {index:'button', title:'Button',path:`${base}button`,icon:'Status-circle'},
    {index:'link', title:'Link',path:`${base}link`,icon:'Status-circle'},
    {index:'textfield', title:'Textfield',path:'/textfield',icon:'Status-circle'},
    {index:'menu', title:'Page Menu',path:'/menu',icon:'Status-circle'},
    {index:'pageheader', title:'Page Header',path:'/pageheader',icon:'Status-circle'},
    {index:'siteheader', title:'Site Header',path:'/siteheader',icon:'Status-circle'},
  ]

  const megaMenu:MegaMenu = [
    [
      {index:'head1', title:'Header', className:'header'},
      {index:'button1', title:'Button',path:`${base}button`},
      {index:'icon1', title:'Icon',path:`${base}icon`},
      {index:'link1', title:'Link',path:`${base}link`},
    ],[
      {index:'head2', title:'Header 2', className:'header'},
      {index:'button2', title:'Button',path:`${base}button`},
      {index:'icon2', title:'Icon',path:`${base}icon`},
      {index:'link2', title:'Link',path:`${base}link`},
    ],[
      {index:'head3' },
      {index:'button3', title:'Button',path:`${base}button`},
      {index:'icon3', title:'Icon',path:`${base}icon`},
      {index:'link3', title:'Link',path:`${base}link`},
    ],[
      {index:'head4', title:'หัวทดสอบอันที่สามแบบยาว', className:'header'},
      {index:'button4', title:'ก่อนกดปุ่ม',path:`${base}button`},
      {index:'icon4', title:'จับ icon',path:`${base}icon`},
      {index:'link4', title:'Link',path:`${base}link`},
    ],[
      {index:'head5' },
      {index:'button5', title:'ปุ่มกด',path:`${base}button`},
      {index:'icon5', title:'ไอคอน',path:`${base}icon`},
      {index:'link5', title:'ลิงค์',path:`${base}link`},
    ]
  ]

  const headerMenu:HeaderMenu = [
    {index:'home6', title:'Home', path:base, leftIcon:'Home'},
    {index:'button6', title:'Button',path:`${base}button`},
    {index:'link6', title:'Link',path:`${base}link`},
    {index:'component6', title:'Component',path:'',rightIcon:'Maximize-arrow', megaMenu:megaMenu},
    {index:'icon6', title:'ไอคอน',path:`${base}icon`},
  ]

  return (
    <Routes>
      <Route path={base} element={ <Layout
          menus={menus}
          headerMenu={headerMenu}
          currentPath={useLocation().pathname} /> } >
        <Route index element={<HomePage />} />
        <Route path={`${base}/icon`} element={<IconPage />} />
        <Route path={`${base}/button`} element={<ButtonPage />} />
        <Route path={`${base}/link`} element={<LinkPage />} />
      </Route>
    </Routes>
  );
}
