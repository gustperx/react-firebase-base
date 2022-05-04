import { FirestoreModel } from "../../../firebase/models/FirestoreModel";

export interface Attributes {
  name: string;
  description: string;
  price: number;
  visible: boolean;
}

export class Product extends FirestoreModel {
  // Firestore table name
  static tableName: string = "products";

  constructor() {
    super();
  }

  static async find(id: string): Promise<Attributes> {
    return await super.retriveDoc(Product.tableName, id);
  }

  static async findAll(): Promise<Attributes[]> {
    return await super.retriveAllDoc(Product.tableName);
  }

  static async create(attributes: Attributes) {
    const docRef = await super.createDoc(Product.tableName, attributes);
    return docRef.id;
  }

  static async update(id: string, attributes: Attributes) {
    await super.updateDoc(Product.tableName, id, attributes);
  }

  static async destroy(id: string) {
    await super.deleteDoc(Product.tableName, id);
  }
}
