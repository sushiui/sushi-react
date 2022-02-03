import { MouseEventHandler } from "react";
import { classNames } from "../utilities/css"

type ButtonProps = {
  onClick?: MouseEventHandler,
  children?: React.ReactNode,
  label?: string,
  leftIcon?: string,
  rightIcon?: string,
  primary?: boolean,
  secondary?: boolean,
  red?: boolean,
  yellow?: boolean,
  green?: boolean,
  orange?: boolean,
  blue?: boolean,
  purple?: boolean,
  gray?: boolean,
  link?: boolean
}

export default function Button({
    onClick,
    label,
    children,
    leftIcon,
    rightIcon,
    primary,
    secondary,
    red,
    yellow,
    green,
    orange,
    blue,
    purple,
    gray,
    link,
  }: ButtonProps) {

  const spanLeftIcon:JSX.Element = leftIcon ? <span className={`ss-icon-${leftIcon}`} /> : <></>;
  const spanRightIcon:JSX.Element = rightIcon ? <span className={`ss-icon-${rightIcon}`} /> : <></>;
  const content:string|React.ReactNode = label ? label : children;

  const className = classNames(
    primary ? "" : "-secondary",
    secondary && "-secondary",
    red && "-purplish-red",
    yellow && "-yellow",
    green && "-yellow-green",
    orange && "-orange",
    blue && "-sky-blue",
    purple && "-purplish-blue",
    gray &&  "-gray",
  )

  const childrens:JSX.Element = (
    <>
      {spanLeftIcon}
      {content}
      {spanRightIcon}
    </>
  );

  if(link) {
    return <a className={className} onClick={onClick}>{childrens}</a>
  }

  return <button className={className} onClick={onClick}>{childrens}</button>
};