const SsHeader = (props) => {
  return (<div className={`header ${props.className}`}>{props.children}</div>);
}

export default SsHeader;