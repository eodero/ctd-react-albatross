import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import style from "./css/App.module.css";
import About from "./components/About";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
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

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className={style.Container}>
              <Header />

              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <span className={style.loading}>Loading ...</span>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
              <Footer />
            </div>
          }
        ></Route>
        <Route path="/new" element={<h1>New Todo List</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

//  return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div className={style.Container}>
//               <Header />
//               <AddTodoForm onAddTodo={addTodo} />
//               {isLoading ? (
//                 <span className={style.loading}>Loading ...</span>
//               ) : (
//                 <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
//               )}
//               <Footer />
//             </div>
//           }
//         ></Route>
//         <Route path="/new" element={<h1>New Todo List</h1>}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };

export default App;
