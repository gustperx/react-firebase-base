import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FirebaseError } from "firebase/app";

import { Attributes, Product, validateAttributes } from "../models";
import { FirestoreErrors } from "../../../firebase/types";

export const CreatePage = () => {
  const [error, setError] = useState<string>();

  const navigate = useNavigate();

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
    handleRegister(data);
    reset();
  };

  const handleRegister = async (data: Attributes) => {
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
          <button type="submit">Crear</button>
        </div>
      </form>
    </>
  );
};
