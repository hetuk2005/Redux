import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../Redux/Auth/actionType";

export const Login = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          gap: "11px",
        }}
      >
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          onChange={handleChange}
          defaultValue={user.email}
        />
      </div>

      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          gap: "11px",
        }}
      >
        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          onChange={handleChange}
          defaultValue={user.password}
        />
      </div>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};
