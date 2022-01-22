// import react from "react";

const SsSite = (props) => {
  return <div className='ss-site'>{props.children}</div>;
};

SsSite.Header = (props) => (
  <div className={`header ${props.className}`}>{props.children}</div>
);
SsSite.Body = (props) => (
  <div className={`body ${props.className}`}>{props.children}</div>
);

export default SsSite;
