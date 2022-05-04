import { db } from "./config";
import { doc, updateDoc } from "firebase/firestore";

export const firestoreUpdateDoc = (
  tableName: string,
  id: string,
  data: any
) => {
  const userRef = doc(db, tableName, id);
  return updateDoc(userRef, data);
};
