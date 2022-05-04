import { DocumentData, QuerySnapshot } from "firebase/firestore";

export const formatDocs = (snapshot: QuerySnapshot<DocumentData>) => {
  const documents: any[] = [];
  snapshot.forEach((doc) => {
    documents.push({
      id: doc.id,
      ...doc.data(),
    });
  });

  return documents;
};

export const formatDoc = (doc: DocumentData) => {
  const document = {
    id: doc.id,
    ...doc.data(),
  };

  return document;
};
