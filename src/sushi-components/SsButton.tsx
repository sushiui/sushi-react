import React from "react";
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
  href?: string,
  newTab?: boolean,
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

export default function SsButton({
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
    href,
    newTab,
  }: ButtonProps) {

  const spanLeftIcon:JSX.Element = leftIcon ? <span className={`ss-icon-${leftIcon}`} /> : <></>;
  const spanRightIcon:JSX.Element = rightIcon ? <span className={`ss-icon-${rightIcon}`} /> : <></>;
  const content:string|React.ReactNode = label ? label : children;

  const target = newTab ? {target:'_blank', rel:'noreferrer noopener'} : {}

  const className = classNames(
    link && "ss-link",
    primary && "-primary",
    secondary && "-secondary",
    color && colorClassName[color],
    disable && "disable"
  )

  const childrens:JSX.Element = (
    <>
      {spanLeftIcon}
      {content}
      {spanRightIcon}
    </>
  );

  // Internal Link

  if(path && link) {
    return (<Link className={`${className}`} to={path} {...target}>{childrens}</Link>)
  }

  if(path) {
    return (<Link className={`ss-button ${className}`} to={path} {...target}>{childrens}</Link>)
  }

  // External Link

  if(href) {
    return (<a href={href} className={`ss-link ${className}`} {...target} >{childrens}</a>)
  }

  // OnClick

  return <button className={`ss-button ${className}`} onClick={onClick}>{childrens}</button>
};