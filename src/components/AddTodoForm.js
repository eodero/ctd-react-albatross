import React, { useState } from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";
import style from "../css/AddTodoForm.module.css";
import { Link } from "react-router-dom";

function AddTodoForm({ onAddTodo, getTodoTitle }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    getTodoTitle(newTodoTitle);
    setTodoTitle(newTodoTitle);
  };

  AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func,
  };

  const handleAddTodo = (event) => {
    event.preventDefault();

    let todoDetails = {
      id: Date.now(),
      title: todoTitle,
    };

    onAddTodo(todoDetails);

    setTodoTitle("");
  };

  return (
    <div className={style.form}>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          todoTitle={todoTitle}
          onChange={handleTitleChange}
          children
          inputRef
        >
          <Link to="/landingPage" className={style.title}>
            Todo
          </Link>
        </InputWithLabel>
        <button type="submit" className={style.button}>
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
