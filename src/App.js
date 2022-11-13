import React from "react";
import { LandingPage } from "./components/LandingPage";
import styles from "./css/App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <LandingPage />
    </div>
  );
}
export default App;
