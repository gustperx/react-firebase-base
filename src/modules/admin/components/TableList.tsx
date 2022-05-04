import { FC } from "react";
import { ProductElement } from "../models";

interface Props {
  products: ProductElement[];
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
}

export const TableList: FC<Props> = ({
  products,
  handleEdit,
  handleDelete,
}) => {
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
