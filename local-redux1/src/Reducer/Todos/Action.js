export const ADDTODO = "ADDTODO";
export const DELETETODO = "DELETETODO";
export const EDITTODO = "EDITTODO";
export const CONFIRMTODO = "CONFIRMTODO";
export const CANCELTODO = "CANCELTODO";

export const addTodo = (data) => {
  return { type: ADDTODO, payload: data };
};
