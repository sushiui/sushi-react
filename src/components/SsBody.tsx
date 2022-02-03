type ssBodyProps = {
  className?: string;
  children?: React.ReactNode;
}

const SsBody = ({ className, children }:ssBodyProps) => (
  <div className={`body ${className ? className : ''}`}>{children}</div>
);

export default SsBody;