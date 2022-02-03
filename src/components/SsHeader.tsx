type Props = {
  className?: string;
  children?: React.ReactNode;
}

const SsHeader = ({className, children}:Props) => {
  return (<div className={`header ${className ? className : ''}`}>{children}</div>);
}

export default SsHeader;