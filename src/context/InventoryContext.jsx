import { createContext, useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import inMemoryJWT from "../services/inMemoryJWT";
import { useSnackbar } from 'notistack'; // Import useSnackbar from notistack


const ResourceClient = axios.create({
  baseURL: `${config.API_URL}/resource`,
  withCredentials: true,
})

export const InventoryContext = createContext({});

function InventoryProvider({ children }){
    const { enqueueSnackbar } = useSnackbar();
    let inventory_test_data = {
        diamonds: 0,
        exp: 0
      };

      const [avatarId, setAvatarId] = useState(1);
      const [achivList, setAchivList] = useState(0);

      function updateInventory(diamondsToAdd, expToAdd) {
        inventory_test_data.diamonds += diamondsToAdd;
        inventory_test_data.exp += expToAdd;
      }


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
  
    const updateDiamonds = ({diamonds}) => {
      
        return ResourceClient.post("/diamonds_update", {diamonds})
          .then((res) => {
            console.log("Успешно обновлены данные:", res.data);
            // Здесь можно что-то сделать с ответом, если это необходимо
          })
          .catch((error) => {
            console.error("Ошибка при обновлении данных:", error);
            throw error;
          });
      };

      const updateExp = ({exp}) => {
      
        return ResourceClient.post("/exp_update", {exp})
          .then((res) => {
            console.log("Успешно обновлены данные:", res.data);
            // Здесь можно что-то сделать с ответом, если это необходимо
          })
          .catch((error) => {
            console.error("Ошибка при обновлении данных:", error);
            throw error;
          });
      };

      const updateScore = ({score}) => {
      
        return ResourceClient.post("/score_update", {score})
          .then((res) => {
            console.log(score)
            console.log("Успешно обновлены данные:", res.data);
            // Здесь можно что-то сделать с ответом, если это необходимо
          })
          .catch((error) => {
            console.error("Ошибка при обновлении данных:", error);
            throw error;
          });
      };
    
      const GetAvatarId = () =>
        {
          return ResourceClient.get("/avatar_id")
          .then((res) => {
              console.log("полученные данные:", res.data);
              setAvatarId(res.data.avatar);
          })
          .catch((error) => {
            console.error("Ошибка при получении данных пользователя:", error);
          });
        }

        const updateAvatarId = (avatarId) => {
         
          return ResourceClient.post("/avatar_id_update", {avatarId})
            .then((res) => {
              console.log("Аватр обновлен",avatarId)
              console.log("Успешно обновлены данные:", res.data);
              GetAvatarId();
              // Здесь можно что-то сделать с ответом, если это необходимо
            })
            .catch((error) => {
              console.error("Ошибка при обновлении данных:", error);
              throw error;
            });
        };

        const GetAchivList = () => {
          return ResourceClient.get("/achive_list")
            .then((res) => {
                console.log("полученные данные:", res.data);
                setAchivList(res.data)
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

        const updateAchive = (achivId, newGot) => {
      
          return ResourceClient.post("/achiv_update", {achivId, newGot})
            .then((res) => {
              console.log("Успешно обновлены данные:", res.data);
              // Здесь можно что-то сделать с ответом, если это необходимо
            })
            .catch((error) => {
              console.error("Ошибка при обновлении данных:", error);
              throw error;
            });
        };
      

    return (
      <InventoryContext.Provider
        value={{
          updateInventory,
          updateDiamonds,
          updateExp,
          GetAvatarId,
          avatarId,
          updateAvatarId,
          updateScore,
          achivList,
          setAchivList,
          GetAchivList,
          updateAchive
        }}
      >
         {children}
      </InventoryContext.Provider>
    );
  };
  
  export default InventoryProvider;
  