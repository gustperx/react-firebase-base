import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  NextOrObserver,
  User,
} from "firebase/auth";
import { firebaseConfig } from "../../config";

initializeApp(firebaseConfig);

interface AuthCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

const auth = getAuth();

export const signInEmailAndPassword = (authCredentials: AuthCredentials) => {
  const { email, password } = authCredentials;
  return signInWithEmailAndPassword(auth, email, password);
};

export const onAuthState = (callback: NextOrObserver<User>) => {
  onAuthStateChanged(auth, callback);
};

export const signOutFirebase = () => {
  signOut(auth)
    .then(() => {
      console.log("Se cerro la sesion");
    })
    .catch((error) => {
      console.log("No pudimos cerrar la sesion");
    });
};

export const createWithEmailAndPassword = (
  registerCredentials: RegisterCredentials
) => {
  const { email, password } = registerCredentials;
  console.log("register");
  return createUserWithEmailAndPassword(auth, email, password);
};

export const updateNameUser = (user: User, name: string) => {
  return updateProfile(user, {
    displayName: name,
  });
};
