type ssIconProps = {
  className?: string;
  name: string;
}

const SsIcon = ({ className, name }:ssIconProps) => {
  return <span className={`ss-icon-${name} ${className ? className : ''}`}></span>;
};

export default SsIcon;
