type ssIconProps = {
  name: string;
}

const SsIcon = ({ name }:ssIconProps) => {
  return <span className={`ss-icon-${name}`}></span>;
};

export default SsIcon;
