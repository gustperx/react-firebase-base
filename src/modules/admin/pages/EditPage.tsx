import { useState, useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FirebaseError } from "firebase/app";

import { Attributes, Product, ProductElement } from "../models";
import { FirestoreErrors } from "../../../firebase/types";
import { Form } from "../components";

export const EditPage = () => {
  const [error, setError] = useState<string>();
  const [product, setProduct] = useState<ProductElement>();

  const navigate = useNavigate();
  const { productId } = useParams();

  if (!productId) {
    return <Navigate to="/admin/dashboard" />;
  }

  const getProduct = async () => {
    console.log("get simple product");
    try {
      const productElement = await Product.find(productId);
      if (!productElement.name) {
        navigate("/admin/dashboard");
      } else {
        setProduct(productElement);
      }
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(FirestoreErrors[error.code]);
      } else {
        console.log("Error generico");
      }
      navigate("/admin/dashboard");
    }
  };

  useMemo(() => getProduct(), [productId]);

  const handleEdit = async (data: Attributes) => {
    try {
      await Product.update(productId, data);
      navigate("/admin/dashboard");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setError(FirestoreErrors[error.code]);
      } else {
        setError("Error generico");
      }
    }
  };

  return (
    <>
      <h1>Editar Producto</h1>

      <pre>{JSON.stringify(product, null, 3)}</pre>

      <p>{error}</p>

      <Form handleForm={handleEdit} formValues={product} />
    </>
  );
};
