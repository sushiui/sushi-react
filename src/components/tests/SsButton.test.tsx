import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from "react-router-dom";
import Button from "../SsButton";

afterEach(() => {
  document.body.innerHTML = ''
})

describe('<Button>', () => {
  describe('children', () => {
    it('assign children as String', () => {
      render(<Button>Label</Button>);
      screen.getByText('Label');
      expect(screen.getByRole('button')).toBeInTheDocument;
      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('assign children as Element', () => {
      render(
        <Button>
          <b>Private</b>
        </Button>
      );
      screen.getByText('Private');
      expect(screen.getByRole('button')).toBeInTheDocument;
      const child = screen.getByText('Private');
      expect(child?.tagName).toBe('B');
    });

    it('show left and right icon from alt', () => {
      const { container } = render(
        <Button label='Public' leftIcon='Search' rightIcon='Table-view'>
          <b>Private</b>
        </Button>
      );
      expect(container.getElementsByTagName('span')[0]).toHaveClass('ss-icon-Search');
      expect(container.getElementsByTagName('span')[1]).toHaveClass('ss-icon-Table-view');
    });

    it('overide children with label', () => {
      render(
        <Button label='Label Text'>
          Children Text
        </Button>
      );
      screen.getByText('Label Text');
      expect(screen.getByRole('button')).toBeInTheDocument;
      expect(screen.getByText('Label Text')).toBeInTheDocument();
      expect(screen.queryByText('Children Text')).not.toBeInTheDocument();
    });
  });

  describe('color', () => {
    it('show red button', () => {
      const { container } = render(
        <Button red label='Red' />
      );
      screen.getByText('Red');
      expect(screen.getByRole('button')).toBeInTheDocument;;
      expect(container.firstChild).toHaveClass("-purplish-red");
    });

    it('show red button', () => {
      const { container } = render(
        <Button purple label='Purple' />
      );
      screen.getByText('Purple');
      expect(screen.getByRole('button')).toBeInTheDocument;
      expect(container.firstChild).toHaveClass("-purplish-blue");
    });
  });

  describe('link', () => {
    it('show simple link', () => {
      const {container} = render(
        <Button link label='Label Text' />
      );
      const child = screen.getByText('Label Text');
      expect(child?.tagName).toBe('A');
      expect(container.firstChild).toHaveClass("ss-link");
    });
  });

  describe('path', () => {
    it('show button that route to path', () => {
      const {container} = render(
        <MemoryRouter initialEntries={['/button']}>
          <Button path="/" label='Label Text' />
        </MemoryRouter>,
      );
      const child = screen.getByText('Label Text');
      expect(child?.tagName).toBe('A');
      expect(container.firstChild).toHaveClass("ss-button");
    });

    it('show link that route to path', () => {
      const {container} = render(
        <MemoryRouter initialEntries={['/button']}>
          <Button link path="/" label='Label Text' />
        </MemoryRouter>
      );
      const child = screen.getByText('Label Text');
      expect(child?.tagName).toBe('A');
      expect(container.firstChild).toHaveClass("ss-link");
    });
  });

  describe('disable', () => {
    it('show link as disable', () => {
      const {container} = render(
        <Button link label='Label Text' disable/>
      );
      const child = screen.getByText('Label Text');
      expect(child?.tagName).toBe('A');
      expect(container.firstChild).toHaveClass("disable");
    });
    it('show button as disable', () => {
      const {container} = render(
        <Button label='Label Text' disable/>
      );
      screen.getByText('Label Text');
      expect(screen.getByRole('button')).toBeInTheDocument;
      expect(container.firstChild).toHaveClass("disable");
    });
  });
});