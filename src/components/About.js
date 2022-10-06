import React from "react";
import style from "../css/App.module.css";
import qcode from "../images/qcode.png";

function About() {
  return (
    <div>
      <img className={style.about_image} src={qcode} alt="QR code" />
    </div>
  );
}

export default About;
