import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const ReqAuth = ({ childern }) => {
  const { isAuth } = useSelector((store) => store.auth);
  // console.log("Is Auth: ", isAuth);
  const location = useLocation();

  if (!isAuth) {
    return (
      <Navigate to={"/login"} state={{ from: location.pathname }} replace />
    );
  }

  return childern;
};
