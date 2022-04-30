import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  redirectPath?: string;
}

export const ProtectedRouter: FC<Props> = ({ redirectPath = "/" }) => {
  /* Logica de negocio */
  const user = true;

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
