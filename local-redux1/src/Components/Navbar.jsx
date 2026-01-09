import { NavLink } from "react-router-dom";

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
            }}
          >
            {el.element}
          </NavLink>
        );
      })}
    </>
  );
};
