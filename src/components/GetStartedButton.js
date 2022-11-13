import React from "react";
import { useNavigate } from "react-router-dom";
import { homePath } from "./routes/HomeRoute";
import style from "../css/GetStartedButton.module.css";

export function GetStartedButton() {
  const navigate = useNavigate();
  const onClick = () => navigate(homePath);
  return (
    <div className={style.start}>
      <button className={style.getStartedbutton} onClick={onClick}>
        Get Started
      </button>
    </div>
  );
}
