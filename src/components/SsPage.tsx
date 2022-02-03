type Props = {
  children?: React.ReactNode;
}

const SsPage = ({children}:Props) => {
  return <div className='ss-page'>{children}</div>;
};

export default SsPage;
