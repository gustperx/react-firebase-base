import { Route, Routes } from "react-router-dom";
import { Error404 } from "../components";

export const MainRouterAdmin = () => {
  return (
    <Routes>
      <Route index element={<h1>Main Router Admin</h1>}></Route>
      <Route path="dashboard" element={<h1>Main Router Admin</h1>}></Route>

      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
};
