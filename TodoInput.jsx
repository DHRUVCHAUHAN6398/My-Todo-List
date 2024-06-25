import React, { useState } from "react";

export default function TodoInput(props) {
  let [inputText, setInputText] = useState("");
  let handleEnterPress = (e) => {
    if (e.keyCode == 13) {
      props.addList(inputText);
      setInputText("");
    }
  };

  return (
    <>
      <form>
        <div className="input-container">
          <input
            type="text"
            className="todo-input-box"
            placeholder="Enter Your Todo"
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            onKeyDown={handleEnterPress}
            required
          />
          <button
            className="add-btn"
            onClick={() => {
              props.addList(inputText);
              setInputText("");
            }}>
            +
          </button>
        </div>
      </form>
    </>
  );
}
