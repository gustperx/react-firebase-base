import { es } from "yup-locales";
import * as yup from "yup";
yup.setLocale(es);

export const schemaLogin = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

export const schemaRegister = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    name: yup.string().required(),
  })
  .required();
