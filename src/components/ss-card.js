// import react from "react";

const SsCard = (props) => {
  if (props.title) {
    return (
      <div className='ss-card'>
        <SsCard.Header>
          <span className='label'>{props.title}</span>
        </SsCard.Header>
        {props.children}
      </div>
    );
  } else {
    return <div className='ss-card'>{props.children}</div>;
  }
};

SsCard.Header = (props) => (
  <div className={`header ${props.className}`}>{props.children}</div>
);
SsCard.Body = (props) => (
  <div className={`body ${props.className}`}>{props.children}</div>
);

export default SsCard;
