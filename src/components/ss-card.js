import react from "react";

const SSCard = (props) => {
  console.log(props);
  return <div className='ss-card'>{props.children}</div>;
};

export default SSCard;
