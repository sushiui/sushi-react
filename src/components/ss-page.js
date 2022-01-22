// import react from "react";

const SsPage = (props) => {
  return <div className='ss-page'>{props.children}</div>;
};

SsPage.Header = (props) => (
  <div className={`header ${props.className}`}>{props.children}</div>
);
SsPage.Body = (props) => (
  <div className={`body ${props.className}`}>{props.children}</div>
);

export default SsPage;
