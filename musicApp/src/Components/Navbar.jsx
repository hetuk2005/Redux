import "../App.css";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { removeToken } from "../Redux/Auth/actionType";

export const Navbar = () => {
  const dispatch = useDispatch();
  const nav = [
    { path: "/", element: "music" },
    { path: "/login", element: "login" },
    { path: "/", element: "editsMusic" },
  ];

  return (
    <div className="mainDiv">
      {nav &&
        nav.map((el, i) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return { background: isActive ? "yellow" : "transparent" };
              }}
              to={el.path}
              className="navLink"
              end
              key={i}
            >
              {el.element}
            </NavLink>
          );
        })}
      <button onClick={() => dispatch(removeToken())}>LogOut</button>
    </div>
  );
};
