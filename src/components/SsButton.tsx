import { MouseEventHandler } from "react";
import { classNames } from "../utilities/css"
import { Link } from "react-router-dom";

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
  disable?: boolean
  link?: boolean,
  path?: string,
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
    disable,
    link,
    path,
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
    link && "ss-link",
    disable && "disable"
  )

  const childrens:JSX.Element = (
    <>
      {spanLeftIcon}
      {content}
      {spanRightIcon}
    </>
  );

  if(link && path) {
    return (<Link className={className} to={path}>{childrens}</Link>)
  }

  if(path) {
    return (<Link className={`ss-button ${className}`} to={path}>{childrens}</Link>)
  }

  if(link){
    return <a className={className} onClick={onClick}>{childrens}</a>
  }

  return <button className={className} onClick={onClick}>{childrens}</button>
};