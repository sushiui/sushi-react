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
  color?: 'red'|'yellow'|'green'|'orange'|'blue'|'purple'|'gray',
  disable?: boolean
  link?: boolean,
  path?: string,
}

const colorClassName = {
  red: "-purplish-red",
  yellow: "-yellow",
  green: "-yellow-green",
  orange: "-orange",
  blue: "-sky-blue",
  purple: "-purplish-blue",
  gray:  "-gray",
}

export default function Button({
    onClick,
    label,
    children,
    leftIcon,
    rightIcon,
    primary,
    secondary,
    color,
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
    color && colorClassName[color],
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