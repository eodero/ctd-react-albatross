import React from "react";
import style from "../css/Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  const thisYear = today.getFullYear();
  return (
    <div className={style.footer}>
      <footer>
        <p> &copy; Erick Odero {thisYear}</p>
        <Link to="/about" className={style.link}>
          About
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
