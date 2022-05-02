import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { MainRouterAuth } from "../modules/auth/routers";
import { MainRouterAdmin } from "../modules/admin/routers";
import { MainRouterPublic } from "../modules/public/routers";
import { ProtectedRouter, AuthenticatedRouter } from "./index";
import { HomePage } from "../modules/public/pages";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> {"|"}
        <Link to="/admin">Administrador</Link> {"|"}
        <Link to="/auth">Login</Link> {"|"}
        <Link to="/auth/register">Register</Link>
      </nav>

      <Routes>
        {/* Default route */}
        {<Route index element={<HomePage />}></Route>}

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
