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
    const doc = await firestoreRetrieveDoc(tableName, id);
    return formatDoc(doc);
  }

  protected static async retriveAllDoc(tableName: string) {
    const snapshot = await firestoreRetrieveAllDoc(tableName);
    return formatDocs(snapshot);
  }

  protected static createDoc(tableName: string, attributes: Attributes<any>) {
    return firestoreCreateDoc(tableName, attributes);
  }

  protected static updateDoc(
    tableName: string,
    id: string,
    attributes: Attributes<any>
  ) {
    return firestoreUpdateDoc(tableName, id, attributes);
  }

  protected static deleteDoc(tableName: string, id: string) {
    return firestoreDeleteDoc(tableName, id);
  }
}
