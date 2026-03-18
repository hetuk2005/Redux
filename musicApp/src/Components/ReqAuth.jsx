import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ReqAuth = ({ childern }) => {
  const { isAuth } = useSelector((store) => store.auth);
  console.log("Is Auth: ", isAuth);

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }

  return childern;
};
