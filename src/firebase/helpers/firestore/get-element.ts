import { db } from "./config";
import { doc, getDoc } from "firebase/firestore";

export const firestoreRetrieveDoc = (tableName: string, id: string) => {
  const userRef = doc(db, tableName, id);
  return getDoc(userRef);
};
