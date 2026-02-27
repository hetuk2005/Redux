import { useMemo } from "react";

const expensiveFunc = (ms) => {
  let start = Date.now();

  while (Date.now() < start - ms) {
    continue;
  }

  return true;
};

const TodoItem = ({ id, text, isEdited, handleDelete, handleEdit }) => {
  useMemo(() => expensiveFunc(200), []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
      }}
    >
      <h3>{id}</h3>
      <h4>{text}</h4>
      <h5>{isEdited ? "true" : "false"}</h5>
      <button onClick={() => handleEdit(id)}>Edit</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

// const shallowCheck = (preb, curr) => {
//   return prev.text === curr.text;
// };

export default TodoItem;
// export default memo(TodoItem);
// export default memo(TodoItem, shallowCheck);

/* 
prev.id === curr.id;
prev.text === curr.text;
prev.handleDelete[func]===curr.handleDelete[func] 
*/
