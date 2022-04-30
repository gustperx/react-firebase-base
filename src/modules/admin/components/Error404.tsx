import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <>
      <h1>404</h1>
      <h3>Pagina no encontrada</h3>
      <Link to="/admin">Ir al Dashboard</Link>
    </>
  );
};
