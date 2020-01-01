import React from "react";
import "./FooterBar.css";

const Footer = ({ items, clicked }) => {
  const qty = items.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  return (
    <footer className="footerBar">
      <p onClick={clicked}>
        {qty} {qty > 1 ? "items" : "item"} in cart
      </p>
    </footer>
  );
};

export default Footer;
