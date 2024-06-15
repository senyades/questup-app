import { useForm, Controller } from "react-hook-form";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../validationSchemas";
import Select from "../../components/select/select";
import Field from "../../components/fields/field";
import Button from "../../components/buttons/button";
import style from "../style.module.scss";

const defaultValues = {
  login: "",
  password: "",
  name: "",
  surname: "",
  teacher: "0", // Устанавливаем значение по умолчанию как строку
};

const rolesList = [
  {
    id: "1",
    title: "Да",
  },
  {
    id: "0",
    title: "Нет",
  },
];

function SignUp() {
  const { handleSignUp, fetchUsers } = useContext(AuthContext);
  const [isView, setIsView] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues,
    resolver: yupResolver(signUpSchema),
  });
  
  const FormInput = (data) => {
    // Преобразуем значение поля "teacher" в "1" или "0"
    const teacherValue = data.teacher;
    // Формируем объект с данными для отправки на бэкенд
    const formData = {
      login: data.login,
      password: data.password,
      name: data.name,
      surname: data.surname,
      teacher: teacherValue,
    };
    console.log(formData); // Вывод данных для проверки

    if (handleSignUp) {
      handleSignUp(formData)
      .then(() => {
        fetchUsers();
        setIsView(false);
      });
     
      
    } else {
      console.error("handleSignUp is not defined");
    }
  };



  return (
    <div>
    <div className='w-64'><Button onClick={()=>setIsView(true)}>Создать пользователя</Button></div>
    {isView &&
    <div className="absolute z-40 top-0 left-0 flex items-center justify-center w-full h-full bg-[#00000070] backdrop-blur-sm">
    <form className={` flex flex-col bg-[#ffffff] gap-2 p-4 w-96 rounded-xl`} onSubmit={handleSubmit(FormInput)}>
    <div className={` flex flex-row justify-between mb-4`} onClick={() => setIsView(false)} >
    <h2 className=" text-xl text-black font-medium ">Создать аккаунт</h2>

      <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" className=" cursor-pointer">
      <path d="M7.58398 7.58301L18.4173 18.4163M7.58398 18.4163L18.4173 7.58301" stroke="#7B7F86" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
      </div>
     
      <Field
        name="login"
        register={register}
        autoComplete="off"
        placeholder="Логин"
        error={Boolean(errors.login)}
        helperText={errors.login?.message}
      />
      <Field
        name="password"
        register={register}
        autoComplete="off"
        placeholder="Пароль"
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
      />
      <Field
        name="name"
        register={register}
        autoComplete="off"
        placeholder="Имя"
        error={Boolean(errors.name)}
        helperText={errors.name?.message}
      />
      <Field
        name="surname"
        register={register}
        autoComplete="off"
        placeholder="Фамилия"
        error={Boolean(errors.surname)}
        helperText={errors.surname?.message}
      />
      <Controller
        control={control}
        name="teacher"
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value} options={rolesList} />
        )}
      />
      <Button disabled={isSubmitting} type="submit">
        Создать аккаунт
      </Button>
    </form>
    </div>
    }
    </div>
  );
}

export { SignUp };
