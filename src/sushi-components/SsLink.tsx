import React from "react";
import '@testing-library/jest-dom';
import { MouseEventHandler } from "react";
import { classNames } from "../utilities/css";
import { Link } from "react-router-dom";

type LinkProps = {
  onClick?: MouseEventHandler,
  children?: React.ReactNode,
  label?: string,
  leftIcon?: string,
  rightIcon?: string,
  disable?: boolean
  link?: boolean,
  path?: string,
  href?: string,
  newTab?: boolean,
}

export default function SsLink({
  onClick,
  children,
  label,
  leftIcon,
  rightIcon,
  disable,
  path,
  href,
  newTab,
}: LinkProps) {

  const spanLeftIcon:JSX.Element = leftIcon ? <span className={`ss-icon-${leftIcon}`} /> : <></>;
  const spanRightIcon:JSX.Element = rightIcon ? <span className={`ss-icon-${rightIcon}`} /> : <></>;
  const content:string|React.ReactNode = label ? label : children;

  const target = newTab ? {target:'_blank', rel:'noreferrer noopener'} : {}

  const className = classNames(
    "ss-link",
    disable && "disable"
  )

  const childrens:JSX.Element = (
    <>
      {spanLeftIcon}
      {content}
      {spanRightIcon}
    </>
  )

  // Internal Link

  if(path) {
    return (<Link className={className} to={path} {...target}>{childrens}</Link> );
  }

  // External Link

  if(href) {
    return (<a className={className} href={href} {...target}>{childrens}</a> );
  }

  // OnClick

  return <button className={className} onClick={onClick}>{childrens}</button>;
};