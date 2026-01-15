import React, { useState } from "react";

export const TodoLogin = ({ props }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, pass };
    props(payload);
  };

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Login</h3>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <label
            style={{ fontWeight: "700", fontSize: "21px" }}
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            autoComplete="off"
            style={{ border: "1px solid", padding: "5px" }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <label
            style={{ fontWeight: "700", fontSize: "21px" }}
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            autoComplete="off"
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPass(e.target.value)}
            style={{ border: "1px solid", padding: "5px" }}
          />
        </div>
        <br />
        <button
          style={{
            cursor: "pointer",
            padding: "7px",
            borderRadius: "7px",
            border: "2px solid",
            fontWeight: "600",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};
