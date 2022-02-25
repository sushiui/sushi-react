import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import SsMenu from "../SsMenu";
import type { Menus } from "../SsMenu";

afterEach(() => {
  document.body.innerHTML = '';
});

describe ('Simple SsMenu', () => {

  const menus:Menus = [
    {index:'index', title:'Home',path:'/',icon:'Home'},
    {index:'icon', title:'Icon',path:'/icon',icon:'Settings-suggest'},
    {index:'component', title:'Component',path:'',icon:'Table-view'},
    {index:'button', title:'Button',path:'/button',icon:'Status-circle'},
  ]

  it('Create simple menu', () => {

    const currentPath = "/"

    const {container} = render (
      <MemoryRouter initialEntries={['/button']}>
        <SsMenu menus={menus} currentPath={currentPath}/>
      </MemoryRouter>
    );

    const childSsMenu = screen.getByTestId('ss-menu');
    expect(childSsMenu.tagName).toBe('UL');
    expect(childSsMenu).toHaveClass("ss-menu");
    expect(childSsMenu.innerHTML).toContain('Home');
    expect(childSsMenu.innerHTML).toContain('Icon');
    expect(childSsMenu.innerHTML).toContain('Component');
    expect(childSsMenu.innerHTML).toContain('Button');

    const indexMenuItem = screen.getByTestId('index');
    expect(indexMenuItem.tagName).toBe('LI');
    expect(indexMenuItem).toHaveClass("selected");
    expect(indexMenuItem.innerHTML).toContain('Home');
  });

  it('Create Link when assisgn path', () => {

    const currentPath = "/"

    const {container} = render (
      <MemoryRouter initialEntries={['/button']}>
        <SsMenu menus={menus} currentPath={currentPath}/>
      </MemoryRouter>
    );

    const indexMenuItem = screen.getByTestId('index');
    expect(indexMenuItem.firstChild?.nodeName).toBe('A');


    const componentMenuItem = screen.getByTestId('component');
    expect(componentMenuItem.firstChild?.nodeName).toBe('DIV');
  });

  it('Show selected at Button when selected is at Button', () => {
    const currentPath = "/button"

    const {container} = render (
      <MemoryRouter initialEntries={['/']}>
        <SsMenu menus={menus} currentPath={currentPath}/>
      </MemoryRouter>
    );

    const indexMenuItem = screen.getByTestId('button');
    expect(indexMenuItem).toHaveClass("selected");
  });
});

describe ('Header in Menu', () => {
  it('Create Header when path is empty', () => {
    const currentPath = "/"

    const menus:Menus = [
      {index:'index', title:'Home',path:'/',icon:'Home'},
      {index:'icon', title:'Icon',path:'/icon',icon:'Settings-suggest'},
      {index:'component', title:'Component',path:'',icon:'Table-view'},
      {index:'button', title:'Button',path:'/button',icon:'Status-circle'},
    ]

    const {container} = render (
      <MemoryRouter initialEntries={['/button']}>
        <SsMenu menus={menus} currentPath={currentPath}/>
      </MemoryRouter>
    );

    const componentMenuItem = screen.getByTestId('component');
    expect(componentMenuItem.firstElementChild).toHaveClass('header');
  });

  it('Create Header when path is empty', () => {
    const currentPath = "/"

    const menus:Menus = [
      {index:'index', title:'Home',path:'/',icon:'Home'},
      {index:'icon', title:'Icon',path:'/icon',icon:'Settings-suggest'},
      {index:'component', title:'Component', icon:'Table-view'},
      {index:'button', title:'Button',path:'/button',icon:'Status-circle'},
    ]

    const {container} = render (
      <MemoryRouter initialEntries={['/button']}>
        <SsMenu menus={menus} currentPath={currentPath}/>
      </MemoryRouter>
    );

    const componentMenuItem = screen.getByTestId('component');
    expect(componentMenuItem.firstElementChild).toHaveClass('header');
  });
});

describe ('Icon in Menu', () => {
  it('Show icon when assign in menus', () => {
    const currentPath = "/"

    const menus:Menus = [
      {index:'index', title:'Home',path:'/'},
      {index:'icon', title:'Icon',path:'/icon',icon:''},
      {index:'component', title:'Component', icon:'Table-view'},
      {index:'button', title:'Button',path:'/button',icon:'Status-circle'},
    ]

    const {container} = render (
      <MemoryRouter initialEntries={['/button']}>
        <SsMenu menus={menus} currentPath={currentPath}/>
      </MemoryRouter>
    );

    const indexMenu = screen.getByTestId('index');
    expect(indexMenu.firstElementChild?.firstChild).toHaveClass('label');
    expect(indexMenu.firstElementChild?.firstChild?.nodeName).toBe('SPAN');

    const iconMenu = screen.getByTestId('icon');
    expect(iconMenu.firstElementChild?.firstChild).toHaveClass('label');
    expect(iconMenu.firstElementChild?.firstChild?.nodeName).toBe('SPAN');

    const componentMenu = screen.getByTestId('component');
    expect(componentMenu.firstElementChild?.firstChild).toHaveClass('ss-icon-Table-view');
    expect(componentMenu.firstElementChild?.firstChild?.nodeName).toBe('SPAN');

    const buttonMenu = screen.getByTestId('button');
    expect(buttonMenu.firstElementChild?.firstChild).toHaveClass('ss-icon-Status-circle');
    expect(buttonMenu.firstElementChild?.firstChild?.nodeName).toBe('SPAN');
  });
});