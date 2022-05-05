import { useState, useMemo } from "react";
import { getAuth } from "firebase/auth";
import { AuthContext, IAuthContext } from "./modules/auth/context/AuthContext";
import { MainRouter } from "./routers/MainRouter";
import { onAuthState } from "./firebase/helpers/auth";

const auth = getAuth();
export const MainApp = () => {
  const [user, setUser] = useState<IAuthContext>({ logged: false });

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

  useMemo(() => onAuthState(userCallback), [auth]);

  return (
    <AuthContext.Provider value={user}>
      <MainRouter />
    </AuthContext.Provider>
  );
};
