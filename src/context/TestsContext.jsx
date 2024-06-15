import { createContext, useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import inMemoryJWT from "../services/inMemoryJWT";
import { useSnackbar } from 'notistack'; // Import useSnackbar from notistack


const ResourceClient = axios.create({
  baseURL: `${config.API_URL}/resource`,
  withCredentials: true,
})

export const TestContext = createContext({});

function TestProvider({ children }){
    const { enqueueSnackbar } = useSnackbar();
    const [test_data, setTestData] = useState();
    const [quantity_test, setQuantity] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [thisblock, updateBlock] = useState(0);
    const [thisthema, newthisThema] = useState(0);
    const [viewTestPage, newviewTestPage] = useState(false);
  
    ResourceClient.interceptors.request.use((config) => {
      const accessToken = inMemoryJWT.getToken();
      if (accessToken) {
        
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    }, 
    (error) => {
      enqueueSnackbar(String(error.response.data.error), { variant: 'error' });
      return Promise.reject(error);
    });
  
    
    const GetTestData = () => {
      return ResourceClient.get("/get_test_list")
        .then((res) => {
            console.log("полученные данные:", res.data);
            setTestData(res.data)
            console.log("[запись в переменную:", test_data);
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

    const GetQuantityTest = () => {
      return ResourceClient.get("/quantity_test")
        .then((res) => {
            console.log("полученные данные:", res.data);
            setQuantity(res.data)
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

    const updateTheme = (testId, theme) => {
      const requestData = {
        testId: testId,
        newThema: theme
      };
    
      return ResourceClient.post("/update_thema", requestData)
        .then((res) => {
          console.log("Успешно обновлены данные:", res.data);
          // Здесь можно что-то сделать с ответом, если это необходимо
        })
        .catch((error) => {
          console.error("Ошибка при обновлении данных:", error);
          throw error;
        });
    };


      const TestBlocked = ({testId, isBlocked}) =>
        {
          console.log(testId, isBlocked)
          return ResourceClient.post("/update_blocked", {testId, isBlocked})
        .then((res) => {
          if(isBlocked==true)
            {
              enqueueSnackbar(String("Тест заблокирован"), { variant: 'success' });
            }
            if(isBlocked==false)
              {
                enqueueSnackbar(String("Тест разблокирован"), { variant: 'success' });
              }
            
        })
        .catch((error) => {
          enqueueSnackbar(String("Ошибка отправки данных"), { variant: 'error' });
          if (error.response.status === 401 || error.response.status === 403) {
            // Обрабатываем ошибку 401 здесь
            // Например, можно перенаправить пользователя на страницу входа или показать сообщение об ошибке
            console.error("Ошибка ", error);
          } 
          else {
            // Если это не ошибка 401, выбрасываем ошибку дальше для её обработки в вызывающем коде
            console.error("Ошибка :", error);
            throw error;
          }
        });
        }

        const handlePageChange = (pageNum) => {
          setCurrentPage(pageNum);
        };
        
    return (
      <TestContext.Provider
        value={{
            test_data,
          GetTestData,
          updateTheme,
          quantity_test,
          GetQuantityTest,
          TestBlocked,
          handlePageChange,
          currentPage,
          updateBlock,
          thisblock,
          thisthema,
          newthisThema,
          viewTestPage,
          newviewTestPage

        }}
      >
         {children}
      </TestContext.Provider>
    );
  };
  
  export default TestProvider;
  