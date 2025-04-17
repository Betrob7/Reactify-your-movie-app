import "./footer.css";
import { motion } from "framer-motion";
import FooterList from "./FooterList";

function Footer() {
  return (
    <>
      <motion.footer className="footer">
        <FooterList />
      </motion.footer>
      <p className="footer__text">&copy;2025 Mighty Nerds - All rights reserved</p>
    </>
  );
}

export default Footer;

// <ul className="footer__list">
// <li className="footer__list-item">
//   <TiSocialYoutube />
// </li>
// <li className="footer__list-item">
//   <TiSocialFacebookCircular />
// </li>
// <li className="footer__list-item">
//   <TiSocialInstagram />
// </li>
// </ul>
