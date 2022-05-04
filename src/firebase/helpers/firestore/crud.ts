import { db } from "./config";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
  getDocs,
} from "firebase/firestore";

export const firestoreCreateDoc = (tableName: string, data: any) => {
  return addDoc(collection(db, tableName), data);
};

export const firestoreUpdateDoc = (
  tableName: string,
  id: string,
  data: any
) => {
  const userRef = doc(db, tableName, id);
  return updateDoc(userRef, data);
};

export const firestoreDeleteDoc = (tableName: string, id: string) => {
  const userRef = doc(db, tableName, id);
  return deleteDoc(userRef);
};

export const firestoreRetrieveDoc = (tableName: string, id: string) => {
  const userRef = doc(db, tableName, id);
  return getDoc(userRef);
};

export const firestoreRetrieveAllDoc = async (tableName: string) => {
  return getDocs(collection(db, tableName));
};
