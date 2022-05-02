import { Route, Routes } from "react-router-dom";
import { Error404 } from "../components";
import { LoginPage, RegisterPage } from "../pages";

export const MainRouterAuth = () => {
  return (
    <Routes>
      <Route index element={<LoginPage />}></Route>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="register" element={<RegisterPage />}></Route>

      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
};
