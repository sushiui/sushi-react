// import react from "react";

const SsCard = (props) => {
  return <div className='ss-card'>{props.children}</div>;
};

SsCard.Header = (props) => (
  <div className={`header ${props.className}`}>{props.children}</div>
);
SsCard.Body = (props) => (
  <div className={`body ${props.className}`}>{props.children}</div>
);

export default SsCard;
