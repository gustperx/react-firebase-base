import { useContext } from "react";
import { signOutFirebase } from "../../../firebase/helpers/auth";
import { AuthContext } from "../../auth/context/AuthContext";

export const HomePage = () => {
  const user = useContext(AuthContext);

  const handleLogout = () => {
    signOutFirebase();
  };

  return (
    <>
      <h1>Admin Home Page</h1>

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <hr />
      <button type="button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </>
  );
};
