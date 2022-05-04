import { FC, useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Attributes, validateAttributes } from "../models";

interface Props {
  handleForm: (data: Attributes) => void;
  formValues?: Attributes;
}

export const Form: FC<Props> = ({ handleForm, formValues }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Attributes>({
    resolver: yupResolver(validateAttributes),
  });

  useMemo(() => reset(formValues), [formValues]);

  const onSubmit: SubmitHandler<Attributes> = (data) => {
    handleForm(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name"></label>
        <input type="text" id="name" {...register("name")} placeholder="Name" />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="description"></label>
        <input
          type="text"
          id="description"
          {...register("description")}
          placeholder="Description"
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div>
        <label htmlFor="price"></label>
        <input
          type="number"
          id="price"
          {...register("price")}
          placeholder="Price"
        />
        {errors.price && <p>{errors.price.message}</p>}
      </div>
      <div>
        <label htmlFor="visible"></label>
        <input
          type="checkbox"
          id="visible"
          {...register("visible")}
          placeholder="Visible"
        />
        {errors.visible && <p>{errors.visible.message}</p>}
      </div>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};
