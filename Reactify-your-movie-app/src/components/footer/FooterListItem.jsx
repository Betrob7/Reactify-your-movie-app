import React from "react";

function FooterListItem({ icon }) {
  const Icon = icon;
  return (
    <li className="footer__list-item">
      <Icon className="footer__icon" />
    </li>
  );
}

export default FooterListItem;
