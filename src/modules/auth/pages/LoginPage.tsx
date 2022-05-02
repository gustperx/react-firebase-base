import { useState } from "react";

import { FirebaseError } from "firebase/app";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { signInEmailAndPassword } from "../../../firebase/helpers/auth";
import { schemaLogin } from "../validations";
import { AuthCredentials, AuthErrors } from "../types";

export const LoginPage = () => {
  const [error, setError] = useState<string>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthCredentials>({
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit: SubmitHandler<AuthCredentials> = (data) => {
    console.log("Submit", data);
    handleLogin(data);
    reset();
  };

  const handleLogin = async (data: AuthCredentials) => {
    try {
      await signInEmailAndPassword(data);
      console.log("Login Process Ok");
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
      <h1>Login Page</h1>

      <p>{error}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
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
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};
