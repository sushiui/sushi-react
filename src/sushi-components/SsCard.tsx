import SsHeader from "./SsHeader";

type ssCardProps = {
  title?: string;
  children?: React.ReactNode;
}

const SsCard = ({title, children}:ssCardProps) => {
  if (title) {
    return (
      <div className='ss-card'>
        <SsHeader>
          <span className='label'>{title}</span>
        </SsHeader>
        {children}
      </div>
    );
  } else {
    return <div className='ss-card'>{children}</div>;
  }
};

export default SsCard;
