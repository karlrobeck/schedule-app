import React from "react";

const Card = ({ children, className = "", ...props }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

const Header = ({ children, className = "", ...props }) => {
  return <div className={`card-header ${className}`}>{children}</div>;
};

const Body = ({ children, className = "", ...props }) => {
  return <div className={`card-body ${className}`}>{children}</div>;
};

const Footer = ({ children, className = "", ...props }) => {
  return <div className={`card-footer ${className}`}>{children}</div>;
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
