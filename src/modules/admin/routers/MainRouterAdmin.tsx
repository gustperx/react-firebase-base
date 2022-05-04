import { Route, Routes } from "react-router-dom";
import { Error404 } from "../components";
import { CreatePage, EditPage, HomePage } from "../pages";

export const MainRouterAdmin = () => {
  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="dashboard" element={<HomePage />}></Route>
      <Route path="create" element={<CreatePage />}></Route>
      <Route path="edit/:productId" element={<EditPage />}></Route>

      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
};
