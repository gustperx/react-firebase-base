import { createContext } from "react";

export interface IAuthContext {
  name?: string;
  email?: string;
  logged: boolean;
}

export const AuthContext = createContext<IAuthContext>({ logged: false });
