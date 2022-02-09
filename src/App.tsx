import "./App.css";
import HomePage from "./pages/HomePage";
import ButtonPage from "./pages/ButtonPage";
import IconPage from "./pages/IconPage";
import Layout from "./Layout";
import { Routes, Route, useLocation } from "react-router-dom";
import type { Menus } from "./components/SsMenu";

export default function App() {

  const menus:Menus = [
    {index:'index', title:'Home',path:'/',icon:'Home'},
    {index:'icon', title:'Icon',path:'/icon',icon:'Settings-suggest'},
    {index:'component', title:'Component',path:'',icon:'Table-view'},
    {index:'button', title:'Button',path:'/button',icon:'Status-circle'},
    {index:'textfield', title:'Textfield',path:'/textfield',icon:'Status-circle'},
    {index:'menu', title:'Page Menu',path:'/menu',icon:'Status-circle'},
    {index:'pageheader', title:'Page Header',path:'/pageheader',icon:'Status-circle'},
    {index:'siteheader', title:'Site Header',path:'/siteheader',icon:'Status-circle'},
  ]

  return (
    <Routes>
      <Route path='/' element={<Layout menus={menus} currentPath={useLocation().pathname}/>} >
        <Route index element={<HomePage />} />
        <Route path='/icon' element={<IconPage />} />
        <Route path='/button' element={<ButtonPage />} />
      </Route>
    </Routes>
  );
}