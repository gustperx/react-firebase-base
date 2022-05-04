import { db } from "./config";
import { collection, getDocs } from "firebase/firestore";

export const firestoreRetrieveAllDoc = async (tableName: string) => {
  return getDocs(collection(db, tableName));
};
