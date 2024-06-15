import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Circle } from "react-preloaders";
import config from "../config";
import inMemoryJWT from "../services/inMemoryJWT";
import { useSnackbar } from 'notistack'; // Import useSnackbar from notistack
import style from "../app.module.scss";
import { boolean } from "yup";

export const AuthClient = axios.create({
  baseURL: `${config.API_URL}/user`,
  withCredentials: true,
});

const ResourceClient = axios.create({
  baseURL: `${config.API_URL}/resource`,
  withCredentials: true,
})

export const AuthContext = createContext({});

function AuthProvider({ children }){

  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  const [isTeacher, setIsTeacher] = useState(null);
  
  const [data, setData] = useState();
  const { enqueueSnackbar } = useSnackbar(); // useSnackbar within a function component

  const [fetchData, setFetchDara] = useState()

  ResourceClient.interceptors.request.use((config) => {
    const accessToken = inMemoryJWT.getToken();
    console.log(accessToken, "в интерсепторе")
    if (accessToken) {
      
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  }, 
  (error) => {
    enqueueSnackbar(String(error.response.data.error), { variant: 'error' });
    return Promise.reject(error);
  });

  
  const GetUserData = () => {
    return ResourceClient.get("/get_user_data")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        setIsTeacher(res.data.user.teacher);
        localStorage.setItem('isTeacher', isTeacher);
        setIsAppReady(true);
      })
      .catch((error) => {
        setIsUserLogged(false);
        if (error.response.status === 401 || error.response.status === 403) {
          // Обрабатываем ошибку 401 здесь
          // Например, можно перенаправить пользователя на страницу входа или показать сообщение об ошибке
          console.error("Ошибка при получении данных пользователя", error);
        } 
        else {
          // Если это не ошибка 401, выбрасываем ошибку дальше для её обработки в вызывающем коде
          console.error("Ошибка при получении данных пользователя:", error);
          throw error;
        }
      });
  };

  
  const handleSignUp = (data) => {
    return AuthClient.post("/create_user", data)
      .then((res) => {
        console.log("Регистрация пользователя:", res.data);
        enqueueSnackbar("Пользователь создан", { variant: 'success' });
        return res.data;
      })
      .catch((error) => {
        enqueueSnackbar(error.response.data.error, { variant: 'error' });
        console.error("Ошибка при регистрации:", error);
      });
  };
  
  const handleSignIn = (data) => {
    return AuthClient.post("/login_user", data)
      .then((res) => {
        const { accessToken, accessTokenExpiration } = res.data;
        inMemoryJWT.setToken(accessToken, accessTokenExpiration);
        setIsUserLogged(true);
        console.log(inMemoryJWT.getToken())
        console.log("Авторизация пользователя:", res.data);
        return res.data;
        
      })
      .catch((error) => {
        enqueueSnackbar(String(error.response.data.error), { variant: 'error' });
        console.error("Ошибка при регистрации:", error);
      });
  };

  const handleLogOut = () => {
    return AuthClient.post("/logout", data).then(()=>
  {
    console.log("Выход")
    inMemoryJWT.deleteToken();
    setIsUserLogged(false);
    
  })
  .catch((error) => {
    enqueueSnackbar(error.response.data.error, { variant: 'error' });
  });
  }

    const getLeaderboard = () => {
      return AuthClient.get("/get_leaderboard")
        .then((res) => {
          return(res.data)
        })
        .catch((error) => {
          if (error.response.status === 401 || error.response.status === 403) {
            // Обрабатываем ошибку 401 здесь
            // Например, можно перенаправить пользователя на страницу входа или показать сообщение об ошибке
            console.error("Ошибка при получении данных пользователя", error);
          } 
          else {
            // Если это не ошибка 401, выбрасываем ошибку дальше для её обработки в вызывающем коде
            console.error("Ошибка при получении данных пользователя:", error);
            throw error;
          }
        });
    };


    const fetchUsers = () => {
      return ResourceClient.get("/get_users")
        .then((res) => {
          console.log(res.data)
          setFetchDara(res.data)
          
        })
        .catch((error) => {
          if (error.response.status === 401 || error.response.status === 403) {
            // Обрабатываем ошибку 401 здесь
            // Например, можно перенаправить пользователя на страницу входа или показать сообщение об ошибке
            console.error("Ошибка при получении данных пользователя", error);
          } 
          else {
            // Если это не ошибка 401, выбрасываем ошибку дальше для её обработки в вызывающем коде
            console.error("Ошибка при получении данных пользователя:", error);
            throw error;
          }
        });
    };

    const deleteUser = ({userId}) => {
      return ResourceClient.post("/delete_user", {userId}).then(()=>
    {
      enqueueSnackbar("Пользователь удален", { variant: 'success' });
      fetchUsers()
    })
    .catch((error) => {
      enqueueSnackbar(error.response.data.error, { variant: 'error' });
    });
    }

  useEffect(() => {
    AuthClient.post("/refresh")
        .then((res) => {
          setIsAppReady(false);
          const { accessToken, accessTokenExpiration } = res.data;
          inMemoryJWT.setToken(accessToken, accessTokenExpiration);
          console.log("метод пост рефреш")
          GetUserData();
          setIsUserLogged(true);
        })
        .catch(() => {
          setIsUserLogged(false);
          if(inMemoryJWT.getToken()!=null)
          {
            setIsUserLogged(true);
            GetUserData();
          }
       
        });
  }, []);



  return (
    <AuthContext.Provider
      value={{
        data,
        handleSignUp,
        handleSignIn,
        isUserLogged,
        isAppReady,
        isTeacher,
        handleLogOut,
        GetUserData,
        getLeaderboard,
        fetchUsers,
        deleteUser,
        fetchData
      }}
    >
       {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
