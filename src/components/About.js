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
        <br />
        <br />
        List everything that you have to do, with the most important tasks at
        the top of the list, and the least important tasks at the bottom. By
        keeping such a list, you make sure that your tasks are written down all
        in one place so you don't forget anything important.
      </p>
      <Link to="/landingPage" className={style.back}>
        Back
      </Link>
    </div>
  );
}

export default About;
