import SsHeader from "./SsHeader";

type Props = {
  title?: string;
  children?: React.ReactNode;
}

const SsCard = ({title, children}:Props) => {
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
