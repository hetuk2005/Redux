import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as types from "../Reducer/Todos/Action";

export const TodoList = () => {
  const dispatch = useDispatch();

  const value = useSelector((xyz) => {
    return xyz.todo;
  });
  console.log("Value: ", value);

  const handleEdit = (id) => {
    dispatch({ type: types.EDITTODO, payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: types.DELETETODO, payload: id });
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>TodoList</h1>
      {value &&
        value.map((el) => {
          return (
            <div
              key={el.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "21px",
              }}
            >
              <input type="checkbox" />
              <p>{el.text}</p>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => handleEdit(el.id)}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(el.id)}
                style={{ cursor: "pointer" }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </>
  );
};
