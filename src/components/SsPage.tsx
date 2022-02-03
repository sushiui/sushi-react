type ssPageProps = {
  children?: React.ReactNode;
}

const SsPage = ({children}:ssPageProps) => {
  return <div className='ss-page'>{children}</div>;
};

export default SsPage;
