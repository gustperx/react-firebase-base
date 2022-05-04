import { db } from "./config";
import { doc, deleteDoc } from "firebase/firestore";

export const firestoreDeleteDoc = (tableName: string, id: string) => {
  const userRef = doc(db, tableName, id);
  return deleteDoc(userRef);
};
