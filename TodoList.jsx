import React from "react";

export default function TodoList(props) {
 
  return (
    <>
      <li className="list-item">
        {props.item}
        <i
          className="fa-sharp fa-solid fa-trash-can fa-fade  dlt-btn"
          onClick={()=>props.deleteItem(props.index)}
         ></i>
      </li>
    </>
  );
}
