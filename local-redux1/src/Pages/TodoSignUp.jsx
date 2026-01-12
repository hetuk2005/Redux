import React from "react";

export const TodoSign = () => {
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Sign-In</h3>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <label style={{ fontWeight: "700", fontSize: "21px" }} htmlFor="name">
            Name/Username
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Name/Username"
            style={{ border: "1px solid", padding: "5px" }}
          />
        </div>
        <br />
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <label
            style={{ fontWeight: "700", fontSize: "21px" }}
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
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
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <label
            style={{ fontWeight: "700", fontSize: "21px" }}
            htmlFor="confirmPass"
          >
            Confirm Password
          </label>
          <input
            id="confirmPass"
            type="password"
            placeholder="Enter Your Confirm Password"
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
          Sign-In
        </button>
      </form>
    </>
  );
};
