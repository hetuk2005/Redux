import { useCallback, useState } from "react";

import TodoItem from "./TodoItem";

export const Todo = () => {
  const initialVal = [
    {
      text: "learn js",
      id: 1,
      isEdited: false,
      isCompleted: false,
    },
    {
      text: "learn react",
      id: 2,
      isEdited: false,
      isCompleted: false,
    },
    {
      text: "learn react-redux",
      id: 3,
      isEdited: false,
      isCompleted: false,
    },
  ];

  const [task, setTask] = useState(initialVal);
  const [text, setText] = useState("");

  const handleTask = () => {
    if (text.trim() === "") return;
    const todo = {
      text: text,
      id: task.length + 1,
      isEdited: false,
      isCompleted: false,
    };
    setTask((prev) => [...prev, todo]);
  };

  const handleEdit = useCallback(
    (id) => {
      setTask(
        task.map((item) =>
          item.id === id ? { ...item, isEdited: true } : item,
        ),
      );
    },
    [task],
  );

  const handleDelete = useCallback(
    (id) => {
      setTask(task.filter((item) => item.id !== id));
    },
    [task],
  );

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo 📘</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          paddingBottom: "15px",
        }}
      >
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button onClick={handleTask}>Add Task</button>
      </div>
      {task &&
        task.map((item) => (
          <TodoItem
            key={item.id}
            {...item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
    </>
  );
};
