import { NavLink } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  const routes = [
    { path: "/", element: "home" },
    { path: "/login", element: "login" },
    { path: "/signup", element: "signup" },
    { path: "/counter", element: "counter" },
    { path: "/todo", element: "todo" },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textTransform: "capitalize",
        }}
      >
        {routes.map((el, i) => {
          return (
            <NavLink
              to={el.path}
              key={i}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "21px",
                color: "black",
                textDecoration: "none",
                fontWeight: "700",
                letterSpacing: "1px",
                fontSize: "21px",
              }}
            >
              {el.element}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};
