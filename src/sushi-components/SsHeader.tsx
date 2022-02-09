type ssHeaderProps = {
  className?: string;
  children?: React.ReactNode;
}

const SsHeader = ({className, children}:ssHeaderProps) => {
  return (<div className={`header ${className ? className : ''}`}>{children}</div>);
}

export default SsHeader;