import { Route, Routes } from "react-router-dom";
import { Error404 } from "../components";
import { HomePage } from "../pages";

export const MainRouterPublic = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePage />}></Route>
      <Route path="products" element={<h1>Soy products</h1>}></Route>

      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
};
