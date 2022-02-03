type Props = {
  name: string;
}

const SsIcon = ({ name }:Props) => {
  return <span className={`ss-icon-${name}`}></span>;
};

export default SsIcon;
