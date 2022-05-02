import { FirebaseError } from "firebase/app";
import { signInEmailAndPassword } from "../../../firebase/helpers/auth";

interface AuthCredentials {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const credentials: AuthCredentials = {
    email: "demo@gmail.com",
    password: "123456",
  };

  const handleLogin = async () => {
    try {
      await signInEmailAndPassword(credentials);
      console.log("Login Process Ok");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(error.code);
        console.log(error.message);
      } else {
        console.log("Error generico");
      }
    }
  };

  return (
    <>
      <h1>Login Page</h1>

      <h3>Hacer login</h3>

      <button type="button" onClick={handleLogin}>
        Iniciar sesión
      </button>
    </>
  );
};
