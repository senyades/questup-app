import { AuthClient } from "../context/AuthContext";

const inMemoryJWTService = () => {
  let inMemoryJWT = null  
  const getToken = ()=> localStorage.getItem('inMemoryJWT');
  const setToken = (token, tokenExpiration)=>
  {
    inMemoryJWT = token;
    localStorage.setItem('inMemoryJWT', inMemoryJWT);
    console.log(inMemoryJWT)
    refreshToken(tokenExpiration)
  };

  let refreshTimeoutId = null;

  const refreshToken =(expiration) => {
    const timeoutTrigger = expiration - 10000;
    console.log("Время жизни токена:", timeoutTrigger)

    refreshTimeoutId = setTimeout(() => {
      AuthClient.post("/refresh").then((res)=> {
        const {accessToken, accessTokenExpiration} = res.data;
        setToken(accessToken, accessTokenExpiration);
        console.log("Новые токены получены")
      })
      .catch(console.error);
    }, timeoutTrigger);
  };

  const abortRefreshToken = () =>
  {

    if(refreshTimeoutId)
    {
      clearInterval(refreshTimeoutId);
    }
    
  }

  const deleteToken = () => {
    inMemoryJWT = null;
    localStorage.clear();
    abortRefreshToken()
  };
  return {getToken, setToken, deleteToken, refreshToken, abortRefreshToken};
};

export default inMemoryJWTService();