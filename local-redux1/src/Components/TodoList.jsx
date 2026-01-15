import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as types from "../Reducer/Todos/Action";

export const TodoList = () => {
  const dispatch = useDispatch();
  // const [updateText, setUpdateText] = useState("");

  const editRef = useRef(null);

  const value = useSelector((xyz) => {
    return xyz.todos.todo;
  });
  console.log("Value: ", value);

  const { token } = useSelector((xyz) => {
    return xyz.auths;
  });
  console.log("Token: ", token);

  const handleEdit = (id) => {
    dispatch({ type: types.EDITTODO, payload: id });
  };

  const handleDelete = (id) => {
    dispatch({ type: types.DELETETODO, payload: id });
  };

  const handleCancel = (id) => {
    dispatch({ type: types.CANCELTODO, payload: id });
  };

  const handleConfirm = (id, value) => {
    dispatch({ type: types.CONFIRMTODO, payload: { id, text: value } });
  };

  return (
    <>
      <h1 style={{ color: "red", fontSize: "25px", fontWeight: "bolder" }}>
        {token}
      </h1>
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
              {el.isEdit ? (
                <>
                  <input type="text" defaultValue={el.text} ref={editRef} />
                  <button
                    onClick={() => handleConfirm(el.id, editRef.current.value)}
                    style={{ cursor: "pointer" }}
                  >
                    Confirm
                  </button>
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => handleCancel(el.id)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          );
        })}
    </>
  );
};
