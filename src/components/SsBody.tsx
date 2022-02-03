type Props = {
  className?: string;
  children?: React.ReactNode;
}

const SsBody = ({ className, children }:Props) => (
  <div className={`body ${className ? className : ''}`}>{children}</div>
);

export default SsBody;