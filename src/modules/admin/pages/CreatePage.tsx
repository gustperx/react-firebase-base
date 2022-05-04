import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { Attributes, Product } from "../models";
import { FirestoreErrors } from "../../../firebase/types";
import { Form } from "../components";

export const CreatePage = () => {
  const [error, setError] = useState<string>();
  const navigate = useNavigate();

  const handleCreate = async (data: Attributes) => {
    try {
      await Product.create(data);
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
      <h1>Nuevo Producto</h1>

      <p>{error}</p>

      <Form handleForm={handleCreate} />
    </>
  );
};
