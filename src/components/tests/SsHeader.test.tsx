import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import SsHeader from "../SsHeader";

afterEach(() => {
  document.body.innerHTML = ''
})

describe('<Button>', () => {
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