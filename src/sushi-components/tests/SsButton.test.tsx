import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from "react-router";
import SsButton from "../SsButton";
import '@testing-library/jest-dom';

afterEach(() => {
  document.body.innerHTML = ''
})

describe('<SsButton>', () => {
  describe('children', () => {
    it('assign children as String', () => {
      render(<SsButton>Label</SsButton>);
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('assign children as Element', () => {
      render(
        <SsButton>
          <b>Private</b>
        </SsButton>
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
      const child = screen.getByText('Private');
      expect(child?.tagName).toBe('B');
    });

    it('show left and right icon from alt', () => {
      const { container } = render(
        <SsButton label='Public' leftIcon='Search' rightIcon='Table-view'>
          <b>Private</b>
        </SsButton>
      );
      expect(container.getElementsByClassName('ss-icon-Search')[0]).toBeInTheDocument();
      expect(container.getElementsByClassName('ss-icon-Table-view')[0]).toBeInTheDocument();
    });

    it('overide children with label', () => {
      render(
        <SsButton label='Label Text'>
          Children Text
        </SsButton>
      );
      expect(screen.getByRole('button')).toBeInTheDocument;
      expect(screen.getByText('Label Text')).toBeInTheDocument();
      expect(screen.queryByText('Children Text')).not.toBeInTheDocument();
    });
  });

  describe('color', () => {
    it('show red button', () => {
      const { container } = render(
        <SsButton color="red" label='Red' />
      );
      expect(screen.getByRole('button')).toBeInTheDocument;;
      expect(container.getElementsByClassName("-purplish-red")[0]).toBeInTheDocument();
    });

    it('show red button', () => {
      const { container } = render(
        <SsButton color="purple" label='Purple' />
      );
      expect(screen.getByRole('button')).toBeInTheDocument;
      expect(container.getElementsByClassName("-purplish-blue")[0]).toBeInTheDocument();
    });
  });

  describe('OnClick as Link', () => {
    it('show simple link', () => {
      const {container} = render(
        <SsButton link label='Label Text' />
      );
      const child = screen.getByText('Label Text');
      expect(child?.tagName).toBe('BUTTON');
      expect(container.getElementsByClassName("ss-link")[0]).toBeInTheDocument();
    });
  });

  describe('Internal Link', () => {
    it('show button that route to path', () => {
      const {container} = render(
        <MemoryRouter initialEntries={['/button']}>
          <SsButton path="/" label='Label Text' />
        </MemoryRouter>,
      );
      const child = screen.getByText('Label Text');
      expect(child?.tagName).toBe('A');
      expect(container.getElementsByClassName("ss-button")[0]).toBeInTheDocument();
    });

    it('show button that route to path in new tab', () => {
      const {getByText} = render(
        <MemoryRouter initialEntries={['/button']}>
          <SsButton path="/" label='Label Text' newTab/>
        </MemoryRouter>
      );
      expect(getByText('Label Text')).toHaveProperty('target','_blank');
      expect(getByText('Label Text')).toHaveProperty('rel','noreferrer noopener');
    });

    it('show link that route to path', () => {
      const {container} = render(
        <MemoryRouter initialEntries={['/button']}>
          <SsButton link path="/" label='Label Text' />
        </MemoryRouter>
      );
      const child = screen.getByText('Label Text');
      expect(child?.tagName).toBe('A');
      expect(container.getElementsByClassName("ss-link")[0]).toBeInTheDocument();
    });

    it('show link that route to path in new tab', () => {
      const {getByText} = render(
        <MemoryRouter initialEntries={['/button']}>
          <SsButton link path="/" label='Label Text' newTab/>
        </MemoryRouter>
      );
      expect(getByText('Label Text')).toHaveProperty('target','_blank');
      expect(getByText('Label Text')).toHaveProperty('rel','noreferrer noopener');
    });
  });

  describe('disable', () => {
    it('show link as disable', () => {
      const {container} = render(
        <SsButton link label='Label Text' disable/>
      );
      const child = screen.getByText('Label Text');
      expect(child?.tagName).toBe('BUTTON');
      expect(container.getElementsByClassName("ss-link")[0]).toBeInTheDocument();
      expect(container.getElementsByClassName("disable")[0]).toBeInTheDocument();
    });
    it('show button as disable', () => {
      const {container} = render(
        <SsButton label='Label Text' disable/>
      );
      screen.getByText('Label Text');
      expect(screen.getByRole('button')).toBeInTheDocument;
      expect(container.getElementsByClassName("disable")[0]).toBeInTheDocument();
    });
  });

  describe('link to external', () => {
     it('Should show herf', () => {
       const {getByText} = render(
         <SsButton href='https://www.google.com' label='google.com' />
       );
       expect(getByText('google.com')).toHaveProperty('href','https://www.google.com/');
     });
     it('Open in new windows', () => {
       const {getByText} = render(
         <SsButton href='https://www.google.com' label='google.com' newTab />
       );
       expect(getByText('google.com')).toHaveProperty('target','_blank');
       expect(getByText('google.com')).toHaveProperty('rel','noreferrer noopener');
     });
  });
});