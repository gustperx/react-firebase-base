import {
  firestoreCreateDoc,
  firestoreDeleteDoc,
  firestoreRetrieveAllDoc,
  firestoreRetrieveDoc,
  firestoreUpdateDoc,
  formatDoc,
  formatDocs,
} from "../helpers/firestore";

export interface Attributes<T> {
  [id: string]: T;
}

export class FirestoreModel {
  protected static async retriveDoc(tableName: string, id: string) {
    try {
      const doc = await firestoreRetrieveDoc(tableName, id);
      return formatDoc(doc);
    } catch (error) {
      throw new Error("Error retriveDoc");
    }
  }

  protected static async retriveAllDoc(tableName: string) {
    try {
      const snapshot = await firestoreRetrieveAllDoc(tableName);
      return formatDocs(snapshot);
    } catch (error) {
      throw new Error("Error retriveAllDoc");
    }
  }

  protected static createDoc(tableName: string, attributes: Attributes<any>) {
    return firestoreCreateDoc(tableName, attributes);
  }

  protected static updateDoc(
    tableName: string,
    id: string,
    attributes: Attributes<any>
  ) {
    firestoreUpdateDoc(tableName, id, attributes);
  }

  protected static deleteDoc(tableName: string, id: string) {
    firestoreDeleteDoc(tableName, id);
  }
}
