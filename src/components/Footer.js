import React from "react";
import style from "../css/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={style.footer}>
        <p>Copyright &copy; 2022</p>
        <a href="/about" className={style.about}>
          About
        </a>
      </footer>
    </div>
  );
};

export default Footer;
