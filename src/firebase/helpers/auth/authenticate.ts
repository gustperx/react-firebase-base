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
      // Sign-out successful.
      console.log("Se cerro la sesion");
    })
    .catch((error) => {
      // An error happened.
      console.log("No pudimos cerrar la sesion");
    });
};

/* export const createWithEmailAndPassword = (
  registerCredentials: RegisterCredentials
) => {
  const { email, password } = registerCredentials;
  console.log("register");
  return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Usuario creado");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      console.log("Code ", errorCode);
      console.log("Message ", errorMessage);
    });
}; */

/* export const updateName = (user: User, name: string) => {
  updateProfile(user, {
    displayName: name,
  });
}; */
