import React from "react";
// import style from "./css/App.module.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;

// import React, { useState, useEffect } from "react";
// import TodoList from "./components/TodoList";
// import AddTodoForm from "./components/AddTodoForm";
// import Navbar from "./components/Navbar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import style from "./css/App.module.css";

// const App = () => {
//   const [todoList, setTodoList] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [todoTitle, setTodoTitle] = useState("");

//   const handleTodoTitle = (e) => {
//     setTodoTitle(e);
//   };

//   useEffect(() => {
//     fetch(
//       `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?view=Grid%20view`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
//         },
//       }
//     )
//       .then((resp) => resp.json())
//       .then((data) => {
//         setTodoList(data.records);
//         setIsLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     if (isLoading === false) {
//       const json = JSON.stringify(todoList);
//       localStorage.setItem("todoList", json);
//     }
//   }, [todoList, isLoading]);

//   const addTodo = async (body) => {
//     const res = await fetch(
//       `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
//       {
//         method: "POST",
//         body: JSON.stringify({
//           fields: {
//             Title: todoTitle,
//           },
//         }),
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
//           Accept: "application/form-data",
//           "Content-type": "application/json",
//         },
//       }
//     );
//     const newTodo = await res.json();
//     console.log(newTodo);
//     setTodoList([...todoList, newTodo]);
//     console.log(todoList);
//   };

//   const removeTodo = async (id) => {
//     return fetch(
//       `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
//       {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
//         },
//       }
//     ).then(() => {
//       const newList = todoList.filter((todo) => todo.id !== id);
//       setTodoList(newList);
//     });
//   };

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div className={style.Container}>
//               <Header />
//               <Navbar />
//               <hr />
//               <AddTodoForm onAddTodo={addTodo} getTodoTitle={handleTodoTitle} />
//               {isLoading ? (
//                 <span className={style.loading}>Loading ...</span>
//               ) : (
//                 <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
//               )}
//               <hr />
//               <Footer />
//             </div>
//           }
//         ></Route>
//         <Route path="/new" element={<h1>New Todo List</h1>}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };
// export default App;
