import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import SsSite from "../SsSite";

afterEach(() => {
  document.body.innerHTML = ''
})

describe('<Button>', () => {
  it('Create simple header', () => {
    const {container} = render(<SsSite />);
    expect(container.firstChild).toHaveClass("ss-site")
  });

  it('Add more className', () => {
    const {container} = render(<SsSite className="-nobreadcrumbs"/>);
    expect(container.firstChild).toHaveClass("-nobreadcrumbs")
    expect(container.firstChild).toHaveClass("ss-site")
  });

  it('Add children', () => {
    render(<SsSite className="-nobreadcrumbs">Title</SsSite>);
    expect(screen.getByText('Title')).toBeInTheDocument;
  });
});