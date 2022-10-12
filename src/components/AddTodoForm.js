import React, { useState } from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";
import style from "../css/AddTodoForm.module.css";

function AddTodoForm({ onAddTodo, getTodoTitle }) {
  const [todoTitle, setTodoTitle] = useState("");

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
    getTodoTitle(newTodoTitle);
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
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        onChange={handleTitleChange}
        children
        inputRef
      >
        <span className={style.title}>Todo:</span>
      </InputWithLabel>
      <button type="submit" className={style.button}>
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
