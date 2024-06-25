import React, { useState } from "react";

import "./App.css";
import TodoInput from "./Component/TodoInput";
import TodoList from "./Component/TodoList";

export default function App() {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "")
      setListTodo([...listTodo, inputText]);
  };
  let deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);

    alert(`Are you sure to delete this work ?`);
  };
  return (
    <>
      <div className="main-container">
        <div className="center-container">
          <TodoInput addList={addList} />
          <h1 className="app-heading">Todo</h1>
          <hr />
          {listTodo.map((listItem, i) => {
            return (
              <TodoList
                key={i}
                index={i}
                item={listItem}
                deleteItem={deleteListItem}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
