/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { TodoInput } from "./TodoInput";
import { getApi } from "../Redux/Action";

export const Todos = () => {
  const { isLoadings, isErrors, todo } = useSelector((state) => {
    return {
      todo: state.todos,
      isLoadings: state.isLoading,
      isErrors: state.isError,
    };
  }, shallowEqual);

  // console.log("Is Error: ", isErrors);
  // console.log("Is Loading: ", isLoadings);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getApi);
  }, []);

  return (
    <>
      <h1>Todo</h1>
      <TodoInput getApi={getApi} />
      {todo?.map((el) => (
        <p key={el.id}>
          {el.title} - {el.status ? "True" : "False"}
        </p>
      ))}

      {isLoadings && <h1>Loading....</h1>}
      {isErrors && <h1>Something Went Wrong....</h1>}
    </>
  );
};
