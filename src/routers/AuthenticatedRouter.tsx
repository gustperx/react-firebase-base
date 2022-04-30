import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  redirectPath?: string;
}

export const AuthenticatedRouter: FC<Props> = ({ redirectPath = "/" }) => {
  /* Logica de negocio */
  const user = false;

  if (user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
