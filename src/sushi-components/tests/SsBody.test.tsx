import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom';
import SsBody from "../SsBody";

afterEach(() => {
  document.body.innerHTML = ''
})

describe('<Button>', () => {
  it('Create simple header', () => {
    const {container} = render(<SsBody />);
    expect(container.firstChild).toHaveClass("body")
  });

  it('Add more className', () => {
    const {container} = render(<SsBody className="-nobreadcrumbs"/>);
    expect(container.firstChild).toHaveClass("-nobreadcrumbs")
    expect(container.firstChild).toHaveClass("body")
  });

  it('Add children', () => {
    render(<SsBody className="-nobreadcrumbs">Title</SsBody>);
    expect(screen.getByText('Title')).toBeInTheDocument;
  });
});