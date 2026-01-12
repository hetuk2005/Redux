import React from "react";

export const TodoLogin = () => {
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
            style={{ border: "1px solid", padding: "5px" }}
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
            type="password"
            placeholder="Enter Your Password"
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
        >
          Login
        </button>
      </form>
    </>
  );
};
