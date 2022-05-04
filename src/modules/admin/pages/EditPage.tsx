import { useState, useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FirebaseError } from "firebase/app";

import {
  Attributes,
  Product,
  ProductElement,
  validateAttributes,
} from "../models";
import { FirestoreErrors } from "../../../firebase/types";

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
        reset(productElement);
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Attributes>({
    resolver: yupResolver(validateAttributes),
  });

  const onSubmit: SubmitHandler<Attributes> = (data) => {
    console.log("Submit", data);
    handleEdit(data);
    reset();
  };

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Name"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="description"></label>
          <input
            type="text"
            id="description"
            {...register("description")}
            placeholder="Description"
          />
          {errors.description && <p>{errors.description.message}</p>}
        </div>
        <div>
          <label htmlFor="price"></label>
          <input
            type="number"
            id="price"
            {...register("price")}
            placeholder="Price"
          />
          {errors.price && <p>{errors.price.message}</p>}
        </div>
        <div>
          <label htmlFor="visible"></label>
          <input
            type="checkbox"
            id="visible"
            {...register("visible")}
            placeholder="Visible"
          />
          {errors.visible && <p>{errors.visible.message}</p>}
        </div>
        <div>
          <button type="submit">Editar</button>
        </div>
      </form>
    </>
  );
};
