import * as Yup from "yup";

export const signInSchema = Yup.object({
  login: Yup.string()
    .required("Поле обязательно!")
    .max(25, "Максимальная длина - 25 символов"),
  password: Yup.string()
    .required("Поле обязательно!")
    .min(3, "Пароль слишком короткий - минимум 3 символа")
    .max(50, "Максимальная длина - 50 символов"),
});

export const signUpSchema = Yup.object({
  login: Yup.string()
    .required("Поле обязательно!")
    .max(25, "Максимальная длина - 25 символов"),
  password: Yup.string()
    .required("Поле обязательно!")
    .min(3, "Пароль слишком короткий - минимум 3 символа")
    .max(50, "Максимальная длина - 50 символов"),
  teacher: Yup.number()
    .required("Поле обязательно!")
    .typeError("Значение должно быть числом!")
    .min(0, "Минимальное значение - 1")
    .max(2, "Максимальное значение - 2"),
});