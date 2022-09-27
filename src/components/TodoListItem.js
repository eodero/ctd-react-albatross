import React from "react";
import PropTypes from "prop-types";
import style from "../css/TodoListItem.module.css";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li className={style.ListItem}>
      <span>{todo.fields.Title} </span>
      <button
        type="button"
        onClick={() => onRemoveTodo(todo.id)}
        className={style.remove_button}
      >
        Remove
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.string,
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
