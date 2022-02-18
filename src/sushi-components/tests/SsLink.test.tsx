import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { MemoryRouter } from "react-router-dom";
import SsLink from "../SsLink";

afterEach(() => {
  document.body.innerHTML = ''
})

describe('<SsLink>', () => {
  describe('children', () => {
    it('assign children as String', () => {
      render(<SsLink>Label</SsLink>);
      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('assign children as Element', () => {
      render(
        <SsLink>
          <b>Private</b>
        </SsLink>
      );
      expect(screen.getByRole('button')).toBeInTheDocument();
      const child = screen.getByText('Private');
      expect(child?.tagName).toBe('B');
    });

    it('show left and right icon from alt', () => {
      const { container } = render(
        <SsLink label='Public' leftIcon='Search' rightIcon='Table-view'>
          <b>Private</b>
        </SsLink>
      );
      expect(container.getElementsByClassName('ss-icon-Search')[0]).toBeInTheDocument();
      expect(container.getElementsByClassName('ss-icon-Table-view')[0]).toBeInTheDocument();
    });

    it('overide children with label', () => {
      render(
        <SsLink label='Label Text'>
          Children Text
        </SsLink>
      );
      expect(screen.getByRole('button')).toBeInTheDocument;
      expect(screen.getByText('Label Text')).toBeInTheDocument();
      expect(screen.queryByText('Children Text')).not.toBeInTheDocument();
    });
  });

  describe('Show button as Link', () => {
    it('Simple link', () => {
      const {container} = render(
        <SsLink link label='Label Text' />
      );
      const child = screen.getByText('Label Text');
      expect(child?.tagName).toBe('BUTTON');
      expect(container.getElementsByClassName("ss-link")[0]).toBeInTheDocument();
    });
  });

  describe('Difference Link', () => {
    it('Internal link', () => {
      const {container} = render(
        <MemoryRouter initialEntries={['/link']}>
          <SsLink path="/button" label='Label Text' />
        </MemoryRouter>,
      );
      const child = screen.getByText('Label Text');
      expect(child?.tagName).toBe('A');
      expect(container.getElementsByClassName("ss-link")[0]).toBeInTheDocument();
      expect(child).toHaveAttribute('href','/button');
    });
    it('External link', () => {
      const {container} = render(
        <SsLink href="https://www.google.com" label='Label Text' />
      );
      const child = screen.getByText('Label Text');
      expect(child?.tagName).toBe('A');
      expect(container.getElementsByClassName("ss-link")[0]).toBeInTheDocument();
      expect(child).toHaveAttribute('href','https://www.google.com');
    });
  });

  describe('Open in new windows', () => {
    it('Internal Link open in new windows', () => {
      const {container} = render(
        <MemoryRouter initialEntries={['/link']}>
          <SsLink path="/button" label='Label Text' newTab/>
        </MemoryRouter>,
      );
      const child = screen.getByText('Label Text');
      expect(child).toHaveAttribute('target','_blank');
      expect(child).toHaveAttribute('rel','noreferrer noopener');
    });
    it('External Link open in new windows', () => {
      const {getByText} = render(
        <SsLink href='https://www.google.com' label='google.com' newTab />
      );
      expect(getByText('google.com')).toHaveAttribute('target','_blank');
      expect(getByText('google.com')).toHaveAttribute('rel','noreferrer noopener');
    });
 });
});