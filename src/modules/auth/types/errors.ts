export interface GenericErrors<T> {
  [id: string]: T;
}

export const AuthErrors: GenericErrors<string> = {
  "auth/invalid-email": "Error credentials",
  "auth/wrong-password": "Error credentials",
  "auth/user-disabled": "user disable",
  "auth/user-not-found": "user no fund",
  "auth/email-already-in-use": "email exist",
  "auth/operation-not-allowed": "error operation",
  "auth/weak-password": "password is not strong enough",
};
