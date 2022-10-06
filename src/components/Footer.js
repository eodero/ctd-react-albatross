import React from "react";
import style from "../css/Footer.module.css";
import About from "./About";

const Footer = () => {
  return (
    <div>
      <footer className={style.footer}>
        <About />
        <p>Copyright &copy; 2022</p>
      </footer>
    </div>
  );
};

export default Footer;
