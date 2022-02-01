import { MouseEventHandler } from "react";

type ButtonProps = {
  onClick?: MouseEventHandler,
  children?: React.ReactNode,
  label?: string,
  leftIcon?: string,
  rightIcon?: string,
  primary?: boolean,
}

export default function Button({
    onClick,
    label,
    children,
    leftIcon,
    rightIcon,
    primary,
  }: ButtonProps) {

  const spanLeftIcon:JSX.Element = leftIcon ? <span className={`ss-icon-${leftIcon}`} /> : <></>;
  const spanRightIcon:JSX.Element = rightIcon ? <span className={`ss-icon-${rightIcon}`} /> : <></>;
  const content:string|React.ReactNode = label ? label : children;

  console.log(primary);
  const className = primary ? "" : "-secondary";

  return (
    <button className={className} onClick={onClick}>
      {spanLeftIcon}
      {content}
      {spanRightIcon}
    </button>
  )
};