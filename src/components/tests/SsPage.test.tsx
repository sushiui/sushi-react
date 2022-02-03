import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import SsPage from "../SsPage";

afterEach(() => {
  document.body.innerHTML = ''
})

describe('<Button>', () => {
  it('Create simple header', () => {
    const {container} = render(<SsPage />);
    expect(container.firstChild).toHaveClass("ss-page")
  });

  it('Add more className', () => {
    const {container} = render(<SsPage className="-nobreadcrumbs"/>);
    expect(container.firstChild).toHaveClass("-nobreadcrumbs")
    expect(container.firstChild).toHaveClass("ss-page")
  });

  it('Add children', () => {
    render(<SsPage className="-nobreadcrumbs">Title</SsPage>);
    expect(screen.getByText('Title')).toBeInTheDocument;
  });
});