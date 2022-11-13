import React from "react";
import PropTypes from "prop-types";
import styles from "../css/TodoListItem.module.css";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <div className={styles.listItemContainer}>
      <li className={styles.ListItem}>
        <span>{todo.fields.Title} </span>
        <button
          type="button"
          onClick={() => onRemoveTodo(todo.id)}
          className={styles.remove_button}
        >
          X
        </button>
      </li>
    </div>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
