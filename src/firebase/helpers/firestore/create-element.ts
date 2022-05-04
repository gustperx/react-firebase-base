import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";

export const firestoreCreateDoc = (tableName: string, data: any) => {
  return addDoc(collection(db, tableName), data);
};
