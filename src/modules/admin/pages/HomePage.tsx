import { useContext, useEffect, useState } from "react";
import { signOutFirebase } from "../../../firebase/helpers/auth";

import { AuthContext } from "../../auth/context/AuthContext";
import { Attributes, Product } from "../models/Product";

export const HomePage = () => {
  const user = useContext(AuthContext);

  const [loading, setLoading] = useState<boolean>(false);

  const handleLogout = () => {
    signOutFirebase();
  };

  let prod = {
    name: "Telefono",
    description: "Iphone 99",
    price: 400,
    visible: true,
  };

  useEffect(() => {
    /* test("0rAZqE584fYl6dgd7gHy"); */

    console.log("aquie");
  }, []);

  const test = async (id: string) => {
    const product = await Product.find(id);
    console.log(product);
  };

  return (
    <>
      <h1>Admin Home Page</h1>

      <h4>{loading ? "Creando" : "Producto Listo"}</h4>

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <hr />
      <button type="button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </>
  );
};
