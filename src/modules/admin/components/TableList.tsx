import { FirebaseError } from "firebase/app";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FirestoreErrors } from "../../../firebase/types";
import { Product, ProductElement } from "../models";

interface Props {
  products: ProductElement[];
}

export const TableList: FC<Props> = ({ products = [] }) => {
  const navigate = useNavigate();

  const handleEdit = (id: string) => {
    navigate(`/admin/edit/${id}`);
  };

  const handleDelete = async (id: string) => {
    try {
      await Product.destroy(id);
      console.log("product delete: ", id);
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.log(FirestoreErrors[error.code]);
      } else {
        console.log("Error generico");
      }
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Visible</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.visible ? "Si" : "No"}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Editar</button>
                <button onClick={() => handleDelete(item.id)}>Borrar</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
