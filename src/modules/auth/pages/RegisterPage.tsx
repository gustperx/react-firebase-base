import { useState } from "react";

import { FirebaseError } from "firebase/app";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  createWithEmailAndPassword,
  updateNameUser,
} from "../../../firebase/helpers/auth";
import { schemaRegister } from "../validations";
import { AuthErrors, AuthRegister } from "../types";

export const RegisterPage = () => {
  const [error, setError] = useState<string>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthRegister>({
    resolver: yupResolver(schemaRegister),
  });

  const onSubmit: SubmitHandler<AuthRegister> = (data) => {
    handleRegister(data);
    reset();
  };

  const handleRegister = async (data: AuthRegister) => {
    try {
      const register = await createWithEmailAndPassword(data);
      await updateNameUser(register.user, data.name);
      console.log("Register Process Ok");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        setError(AuthErrors[error.code]);
      } else {
        setError("Error generico");
      }
    }
  };

  return (
    <>
      <h1>Register Page</h1>

      <p>{error}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="login_name"></label>
          <input
            type="text"
            id="login_name"
            {...register("name")}
            placeholder="Name"
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="login_email"></label>
          <input
            type="text"
            id="login_email"
            {...register("email")}
            placeholder="Email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="login_password"></label>
          <input
            type="password"
            id="login_password"
            {...register("password")}
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
};
