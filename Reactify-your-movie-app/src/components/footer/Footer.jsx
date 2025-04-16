import "./footer.css";
import { TiSocialYoutube, TiSocialFacebookCircular, TiSocialInstagram } from "react-icons/ti";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <motion.footer className="footer">
        <ul className="footer__list">
          <li className="footer__list-item">
            <TiSocialYoutube />
          </li>
          <li className="footer__list-item">
            <TiSocialFacebookCircular />
          </li>
          <li className="footer__list-item">
            <TiSocialInstagram />
          </li>
          <li className="footer__list-item"></li>
        </ul>
      </motion.footer>
      <p className="footer__text">&copy;2025 Mighty Nerds - All rights reserved</p>
    </>
  );
}

export default Footer;
