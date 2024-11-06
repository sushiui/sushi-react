import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom';
import { HashRouter } from 'react-router-dom';
import SsHeader from "../SsHeader";
import type { HeaderMenu, MegaMenu } from "../SsHeader";

afterEach(() => {
  document.body.innerHTML = ''
})

describe('<SsHeader>', () => {
  it('Create simple header', () => {
    const {container} = render(<SsHeader />);
    expect(container.firstChild).toHaveClass("header")
  });

  it('Add more className', () => {
    const {container} = render(<SsHeader className="-nobreadcrumbs"/>);
    expect(container.firstChild).toHaveClass("-nobreadcrumbs")
    expect(container.firstChild).toHaveClass("header")
  });

  it('Add children', () => {
    render(<SsHeader className="-nobreadcrumbs">Title</SsHeader>);
    expect(screen.getByText('Title')).toBeInTheDocument;
  });
});

describe('<SsHeader.Menu/>', () => {
  const currentPath = "/"
  const headerMenu:HeaderMenu = [
    {index:'home', title:'Home', path:"/", leftIcon:'Home'},
    {index:'button', title:'Button',path:"/button"},
    {index:'link', title:'Link',path:"/link", rightIcon:"Home"},
  ]

  it('Create simple header\'s menu', () => {
    const {container} = render(
      <HashRouter>
        <SsHeader.Menu menus={headerMenu} currentPath={currentPath}/>
      </HashRouter>
    );

    expect(container.firstChild?.nodeName).toBe('UL');
    expect(container.innerHTML).toContain('Home');
    expect(container.innerHTML).toContain('Button');
    expect(container.innerHTML).toContain('Link');

    const homeMenu = screen.getByTestId('home')
    expect(homeMenu.nodeName).toBe('LI');
    expect(homeMenu).toHaveClass("selected");
    expect(homeMenu.firstChild?.nodeName).toBe('A');
    expect(homeMenu.firstChild?.firstChild).toHaveClass('ss-icon-Home');

    const buttonMenu = screen.getByTestId('button')
    expect(buttonMenu.nodeName).toBe('LI');
    expect(buttonMenu).not.toHaveClass("selected");

    const linkMenu = screen.getByTestId('link')
    expect(linkMenu.nodeName).toBe('LI');
    expect(linkMenu).not.toHaveClass("selected");
    expect(linkMenu.firstChild?.lastChild).toHaveClass('ss-icon-Home');
  });
});

describe('Mega Menu', () => {
  const currentPath = "/";

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
    ]
  ]

  const headerMenu:HeaderMenu = [
    {index:'home', title:'Home', path:"/", leftIcon:'Home'},
    {index:'button', title:'Button',path:"/button"},
    {index:'component', title:'Component', leftIcon:'Main-Component-filled', megaMenu:megaMenu},
    {index:'link', title:'Link',path:"/link", rightIcon:"Home"},
  ]

  it('Create simple mega menu', () => {
    const {container} = render(
      <HashRouter>
        <SsHeader.Menu menus={headerMenu} currentPath={currentPath}/>
      </HashRouter>
    );

    const dropDownMega = screen.getByTestId('component')
    expect(dropDownMega.nodeName).toBe('LI');
    expect(dropDownMega).toHaveClass('-dropdownMega');
    expect(dropDownMega.firstChild?.firstChild).toHaveClass('ss-icon-Main-Component-filled');

    const firstMegaMenu = screen.getByTestId('component-0')
    expect(firstMegaMenu.nodeName).toBe('UL');
    expect(firstMegaMenu).toHaveClass('ss-menu');

  });
});