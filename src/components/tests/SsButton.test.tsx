import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom'
import Button from "../SsButton";

afterEach(() => {
  document.body.innerHTML = ''
})

describe('<Button>', () => {
  describe('children', () => {

    it('Pass String', () => {
      render(<Button>Label</Button>);
      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('Pass Children', () => {
      render(
        <Button>
          <b>Private</b>
        </Button>
      );
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
  });

  describe('content', () => {
    it('overide content with label', () => {
      render(
        <Button label='Public'>
          <b>Private</b>
        </Button>
      );
      expect(screen.getByText('Public')).toBeInTheDocument();
      expect(screen.queryByText('Private')).not.toBeInTheDocument();
    });
  });

  describe('color', () => {
    it('show red button', () => {
      const { container } = render(
        <Button red label='Public' />
      );
      expect(container.firstChild).toHaveClass("-purplish-red");
    })

    it('show red button', () => {
      const { container } = render(
        <Button purple label='Public' />
      );
      expect(container.firstChild).toHaveClass("-purplish-blue");
    })
  });
});