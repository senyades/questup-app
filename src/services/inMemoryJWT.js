import { AuthClient } from "../context/AuthContext";

const inMemoryJWTService = () => {
  let inMemoryJWT = null  
  const getToken = ()=> localStorage.getItem('inMemoryJWT');
  const setToken = (token, tokenExpiration)=>
  {
    inMemoryJWT = token;
    localStorage.setItem('inMemoryJWT', inMemoryJWT);
    refreshToken(tokenExpiration)
  };

  let refreshTimeoutId = null;

  const refreshToken =(expiration) => {
    const timeoutTrigger = expiration - 10000;

    refreshTimeoutId = setTimeout(() => {
      AuthClient.post("/refresh").then((res)=> {
        const {accessToken, accessTokenExpiration} = res.data;
        setToken(accessToken, accessTokenExpiration);
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