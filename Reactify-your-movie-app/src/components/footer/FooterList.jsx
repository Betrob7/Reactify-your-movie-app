import React from "react";
import FooterListItem from "./FooterListItem";
import { TiSocialYoutube, TiSocialFacebookCircular, TiSocialInstagram } from "react-icons/ti";

function FooterList() {
  return (
    <ul className="footer__list">
      <FooterListItem key="youtube" icon={TiSocialYoutube} aria-label="youtube" />
      <FooterListItem key="facebook" icon={TiSocialFacebookCircular} aria-label="facebook" />
      <FooterListItem key="instagram" icon={TiSocialInstagram} aria-label="instagram" />
    </ul>
  );
}

export default FooterList;
