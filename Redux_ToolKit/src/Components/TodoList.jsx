import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteTodo } from "../Redux/TodoSlicer";

export const TodoList = () => {
  const dispatch = useDispatch();

  const value = useSelector((store) => store.todo);
  console.log("✈️  value: ", value);

  return (
    <>
      {value &&
        value.map((el, i) => {
          return (
            <div
              key={el.id}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <h2>{i + 1}</h2>
                  <h3>{el.text}</h3>
                  <button>Edit</button>
                  <button onClick={()=>dispatch(deleteTodo(el.id))}>Delete</button>
            </div>
          );
        })}
    </>
  );
};
