import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainRouterAuth } from "../modules/auth/routers";
import { MainRouterAdmin } from "../modules/admin/routers";
import { MainRouterPublic } from "../modules/public/routers";
import { ProtectedRouter, AuthenticatedRouter } from "./index";
import { HomePage } from "../modules/public/pages";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route index element={<HomePage />}></Route>

        {/* Public routes */}
        <Route path="/*" element={<MainRouterPublic />}></Route>

        {/* Auth routes */}
        <Route element={<AuthenticatedRouter />}>
          <Route path="/auth/*" element={<MainRouterAuth />}></Route>
        </Route>

        {/* Admin routes */}
        <Route element={<ProtectedRouter />}>
          <Route path="/admin/*" element={<MainRouterAdmin />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
