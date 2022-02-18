import React from "react";

type ssSiteProps = {
  className?: string;
  children?: React.ReactNode;
}

const SsSite = ({ className, children }:ssSiteProps) => (
  <div className={`ss-site ${className ? className : ''}`}>{children}</div>
);

export default SsSite;
