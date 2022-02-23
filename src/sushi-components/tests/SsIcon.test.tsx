import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SsIcon from "../SsIcon";

afterEach(() => {
  document.body.innerHTML = ''
})

describe('<Button>', () => {
  it('General icon', () => {
    const {container} = render(<SsIcon name='Search' />);
    expect(container.firstChild).toHaveClass("ss-icon-Search")
  });
});