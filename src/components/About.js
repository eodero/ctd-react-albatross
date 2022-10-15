import React from "react";
import { Link } from "react-router-dom";
import style from "../css/Footer.module.css";

function About() {
  return (
    <div>
      <p className={style.about}>
        This TodoList app will help you manage your time, tasks and streamline
        your day. Just add a task and start managing your time. It can be used
        on mobile devices as well as desktop.
      </p>
      <Link to="/" className={style.back}>
        Back
      </Link>
    </div>
  );
}

export default About;
