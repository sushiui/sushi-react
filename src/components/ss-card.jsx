import SsHeader from "./ss-header";

const SsCard = (props) => {
  if (props.title) {
    return (
      <div className='ss-card'>
        <SsHeader>
          <span className='label'>{props.title}</span>
        </SsHeader>
        {props.children}
      </div>
    );
  } else {
    return <div className='ss-card'>{props.children}</div>;
  }
};

export default SsCard;
