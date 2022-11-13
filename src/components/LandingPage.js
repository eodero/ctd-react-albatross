import React from "react";
import Footer from "./Footer";
// import style from "../css/Header.module.css";
import styles from "../css/LandingPage.module.css";
// import About from "./About";
import { GetStartedButton } from "./GetStartedButton";

export function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <div className={styles.appTitle}>
        <h2>Todo App</h2>
      </div>
      <div className="landing-page-btn">
        <GetStartedButton />
      </div>
      <Footer />
      {/* <About /> */}
    </div>
  );
}
