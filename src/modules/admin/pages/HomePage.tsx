import { useContext } from "react";
import { signOutFirebase } from "../../../firebase/helpers/auth";
import { AuthContext } from "../../auth/context/AuthContext";
import { ProductList } from "../components";

export const HomePage = () => {
  const user = useContext(AuthContext);

  const handleLogout = () => {
    signOutFirebase();
  };

  return (
    <>
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button type="button" onClick={handleLogout}>
        Cerrar sesión
      </button>

      <ProductList />
    </>
  );
};
