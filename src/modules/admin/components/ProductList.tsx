import { FirebaseError } from "firebase/app";
import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FirestoreErrors } from "../../../firebase/types";
import { ProductElement, Product } from "../models/Product";
import { TableList } from "./TableList";

export const ProductList = () => {
  const [products, setProducts] = useState<ProductElement[]>([]);

  const navigate = useNavigate();

  const traerProductos = async () => {
    console.log("get products");
    try {
      const productList = await Product.findAll();
      setProducts(productList);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(FirestoreErrors[error.code]);
      } else {
        console.log("Error generico");
      }
    }
  };

  useMemo(() => traerProductos(), []);

  const handleCreate = () => {
    navigate("/admin/create");
  };

  return (
    <>
      <h3>Lista de productos</h3>

      <button onClick={handleCreate}>Crear producto</button>

      <hr />
      {products ? <TableList products={products} /> : <h5>No hay productos</h5>}
    </>
  );
};
