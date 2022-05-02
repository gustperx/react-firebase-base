import { createContext } from "react";

interface AuthContext {
  name?: string;
  email?: string;
  logged: boolean;
}

export const AuthContext = createContext<AuthContext>({ logged: false });
