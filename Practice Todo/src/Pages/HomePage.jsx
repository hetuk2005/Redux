/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import * as types from "../Redux/Action";

export const HomePage = () => {
  const dispatch = useDispatch();

  const fakeStore = useSelector((state) => state.fakeStore);
  const isLoading = useSelector((state) => state.isLoading);
  const isError = useSelector((state) => state.isError);

  useEffect(() => {
    dispatch(types.getRequest());

    axios
      .get("https://fakestoreapi.com/products/")
      .then((res) => dispatch(types.getSuccess(res.data)))
      .catch((err) => dispatch(types.getFailure(err)));
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Something Went Wrong...</h1>;

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Fake Store</h1>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          justifyContent: "center",
          alignItems: "center",
          width: "91%",
          gap: "21px",
          margin: "auto",
        }}
      >
        {fakeStore?.map((el) => (
          <div
            key={el.id}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "11px",
              textAlign: "center",
            }}
          >
            <img src={el.image} style={{ width: "300px" }} />
            <h4>Title: {el.title}</h4>
            <p>Description: {el.description}</p>
            <p>Price: ${el.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};
