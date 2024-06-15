import { React, useContext, useState, useEffect } from "react";
import Navbar from '../../components/molecule/navbar';
import Header from '../../components/molecule/header';
import Button from "../../components/buttons/button";
import { AuthContext } from "../../context/AuthContext";
import AvatarUsers from "../../components/molecule/avatarUsers";
import styles from "./lidearboard.module.scss"

function Lidearboard() {

  const { getLeaderboard } = useContext(AuthContext);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Получаем данные о лидерборде при загрузке компонента
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const leaderboardData = await getLeaderboard();
      setLeaderboard(leaderboardData);
    } catch (error) {
      console.error("Ошибка при получении лидерборда:", error);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#f9fafb]">
      <Header />
      <div className="flex flex-row w-full" style={{height: `91%`}}>
        <Navbar />
        <div className="flex w-full overflow-y-auto flex-row items-center h-full  gap-8 justify-center ">

          <div className="w-full flex flex-col h-full items-center gap-4 pt-10 ">
            <div className="flex flex-col items-center gap-1">

              <h2 className=" flex flex-col items-start text-2xl text-center font-medium">Лидерборд</h2>
              <span className="text-base text-gray-500 font-normal">Проходи успешно тесты и появляйся в топе студентов</span>
            </div>
             

              <div className="flex flex-col gap-2 pb-10 ">
                  {leaderboard.map((user, index) => (
                    <div key={index} className={`${styles[`name${index}`]} ${styles.lidear} justify-between content-center items-center`}>
                      <div className="flex flex-row gap-4 items-center"> <div className="w-20"><AvatarUsers avatarId={user.avatar}></AvatarUsers></div>
                      <div className="text-xl text-center font-medium">{user.name} {user.surname}</div></div>
                     
                      <div className="flex flex-row gap-4">
                        <div className='diamonds flex flex-row items-center justify-center  gap-2 bg-gray-50 p-0 px-3 rounded-full border border-gray-200	 h-9'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                          <circle cx="11" cy="11" r="9" fill="#439DD7"/>
                        </svg>
                        {user.diamonds}
                          </div>
                        <div className='exp flex flex-row gap-2 items-center bg-gray-50 p-0 px-3 rounded-full border border-gray-200 h-9'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                          <path d="M18.3774 10.7812L8.75238 21.0937C8.65038 21.2026 8.51574 21.2753 8.36879 21.3009C8.22183 21.3266 8.07053 21.3037 7.93771 21.2358C7.8049 21.1679 7.69777 21.0586 7.6325 20.9245C7.56723 20.7903 7.54737 20.6386 7.57589 20.4922L8.83574 14.1904L3.88316 12.3307C3.77679 12.2909 3.68194 12.2254 3.60708 12.14C3.53221 12.0546 3.47966 11.952 3.45413 11.8414C3.42859 11.7307 3.43087 11.6155 3.46074 11.5059C3.49062 11.3963 3.54717 11.2959 3.62535 11.2135L13.2503 0.901009C13.3523 0.792157 13.487 0.719433 13.6339 0.693811C13.7809 0.66819 13.9322 0.691061 14.065 0.758973C14.1978 0.826885 14.305 0.936154 14.3702 1.07029C14.4355 1.20443 14.4554 1.35615 14.4268 1.50257L13.1635 7.81124L18.1161 9.66835C18.2217 9.70841 18.3158 9.77385 18.3901 9.8589C18.4644 9.94395 18.5166 10.046 18.542 10.156C18.5675 10.266 18.5655 10.3806 18.5362 10.4896C18.5069 10.5987 18.4512 10.6988 18.3739 10.7812H18.3774Z" fill="#FFC225"/>
                        </svg>
                        {user.exp}
                          </div>
                      </div>
                    </div>
                  ))}
                </div>

          </div>
         
            
        </div>
      </div>
    </div>
  );
}

export {Lidearboard};
