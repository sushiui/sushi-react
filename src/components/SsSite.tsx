type Props = {
  children?: React.ReactNode;
}

const SsSite = ({children}:Props) => {
  return <div className='ss-site'>{children}</div>;
};

export default SsSite;
