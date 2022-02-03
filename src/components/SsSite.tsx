type ssSiteProps = {
  children?: React.ReactNode;
}

const SsSite = ({children}:ssSiteProps) => {
  return <div className='ss-site'>{children}</div>;
};

export default SsSite;
