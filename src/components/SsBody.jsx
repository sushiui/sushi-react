const SsBody = (props) => (
  <div className={`body ${props.className ? props.className : ''}`}>{props.children}</div>
);

export default SsBody;