import { FC, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../modules/auth/context/AuthContext";

interface Props {
  redirectPath?: string;
}

export const AuthenticatedRouter: FC<Props> = ({ redirectPath = "/admin" }) => {
  /* Logica de negocio */
  const user = useContext(AuthContext);

  if (user.logged) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
