import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { AuthContext } from "./modules/auth/context/AuthContext";
import { MainRouter } from "./routers/MainRouter";
import { onAuthState } from "./firebase/helpers/auth";

interface AuthContext {
  name?: string;
  email?: string;
  logged: boolean;
}

const auth = getAuth();
export const MainApp = () => {
  const [user, setUser] = useState<AuthContext>({ logged: false });
  useEffect(() => {
    console.log("llamo aqui");
    onAuthState(userCallback);
  }, [auth]);

  const userCallback = (user: any) => {
    if (user) {
      console.log("OK - authenticated");
      setUser({
        name: user.displayName,
        email: user.email,
        logged: true,
      });
    } else {
      console.log("NOT - unauthenticated");
      setUser({ logged: false });
    }
  };

  return (
    <AuthContext.Provider value={user}>
      <MainRouter />
    </AuthContext.Provider>
  );
};
