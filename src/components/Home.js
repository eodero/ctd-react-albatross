import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import style from "../css/App.module.css";

function Home() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [todoTitle, setTodoTitle] = useState("");

  const handleTodoTitle = (e) => {
    setTodoTitle(e);
  };

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setTodoList(data.records);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      const json = JSON.stringify(todoList);
      localStorage.setItem("todoList", json);
    }
  }, [todoList, isLoading]);

  const addTodo = async (body) => {
    const res = await fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        method: "POST",
        body: JSON.stringify({
          fields: {
            Title: todoTitle,
          },
        }),
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          Accept: "application/form-data",
          "Content-type": "application/json",
        },
      }
    );
    const newTodo = await res.json();
    console.log(newTodo);
    setTodoList([...todoList, newTodo]);
    console.log(todoList);
  };

  const removeTodo = async (id) => {
    return fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    ).then(() => {
      const newList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newList);
    });
  };

  return (
    <div className={style.content}>
      <AddTodoForm onAddTodo={addTodo} getTodoTitle={handleTodoTitle} />
      {isLoading ? (
        <span className="loading">Loading ...</span>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </div>
  );
}

export default Home;
