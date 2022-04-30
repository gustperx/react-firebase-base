import { Route, Routes } from "react-router-dom";
import { Error404 } from "../components";

export const MainRouterAuth = () => {
  return (
    <Routes>
      <Route index element={<h1>Soy login</h1>}></Route>
      <Route path="login" element={<h1>Soy login</h1>}></Route>
      <Route path="register" element={<h1>Soy register</h1>}></Route>

      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
};
