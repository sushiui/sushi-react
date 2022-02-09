type ssPageProps = {
  className?: string;
  children?: React.ReactNode;
}

const SsPage = ({ className, children }:ssPageProps) => (
  <div className={`ss-page ${className ? className : ''}`}>{children}</div>
);

export default SsPage;