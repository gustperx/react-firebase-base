import {
  firestoreCreateDoc,
  firestoreDeleteDoc,
  firestoreRetrieveAllDoc,
  firestoreRetrieveDoc,
  firestoreUpdateDoc,
  formatDocs,
} from "../helpers/firestore";

const create = async () => {
  try {
    const docRef = await firestoreCreateDoc("table", {});
    console.log(docRef.id);
  } catch (err) {
    console.log("error => ", err);
  }
};

const update = async () => {
  try {
    await firestoreUpdateDoc("table", "id", {});
  } catch (error) {
    console.log("error => ", error);
  }
};

const retrive = async () => {
  try {
    const doc = await firestoreRetrieveDoc("table", "id");
    console.log(doc.id);
    console.log(doc.data());
  } catch (error) {
    console.log("error => ", error);
  }
};

const retriveAll = async () => {
  try {
    const snapshot = await firestoreRetrieveAllDoc("table");
    const docs = formatDocs(snapshot);
    console.log(docs);
  } catch (error) {
    console.log("error => ", error);
  }
};

const deleteDoc = async () => {
  try {
    await firestoreDeleteDoc("table", "id");
  } catch (error) {
    console.log("error => ", error);
  }
};
