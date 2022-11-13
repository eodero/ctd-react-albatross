import React from "react";
import style from "../css/Header.module.css";
import notepad from "../images/notepad.jpg";

const Header = () => {
  return (
    <div className={style.container_header}>
      <img className={style.headerImage} src={notepad} alt="notepad" />
      <h1 className={style.todoList}>Todo List</h1>
    </div>
  );
};

export default Header;
