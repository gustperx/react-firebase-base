import { FirebaseError } from "firebase/app";
import { useState, useMemo } from "react";
import { FirestoreErrors } from "../../../firebase/types";
import { Product, ProductElement } from "../../admin/models";
export const ProductList = () => {
  const [products, setProducts] = useState<ProductElement[]>([]);

  const getProducts = async () => {
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

  useMemo(() => getProducts(), []);

  return (
    <>
      <h3>Super Lista</h3>

      {products.map((item) => {
        return (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        );
      })}
    </>
  );
};
