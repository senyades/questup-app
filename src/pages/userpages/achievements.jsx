import React, { useContext, useState, useEffect, useCallback } from "react";
import Navbar from '../../components/molecule/navbar';
import Header from '../../components/molecule/header';
import { InventoryContext } from "../../context/InventoryContext";
import { AuthContext } from "../../context/AuthContext";
import style from "./dashboard.module.scss";

function Achievements() {
  const { achivList, GetAchivList, updateAchive } = useContext(InventoryContext);
  const [isLoading, setIsLoading] = useState(true);
  const { data } = useContext(AuthContext);

  // useCallback ensures that GetAchivList is memoized and doesn't change on every render
  const memoizedGetAchivList = useCallback(GetAchivList, []);

  useEffect(() => {
    const fetchData = async () => {
      await memoizedGetAchivList();
      setIsLoading(false);
    };
    fetchData();
  }, [memoizedGetAchivList]);

  const isActive = (achiveId) => {
    if (achivList && achivList[0]) {
      return achivList[0][achiveId]?.got;
    }
    return false;
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-full bg-[#f9fafb]">
      <Header />
      <div className="flex flex-row w-full h-full">
        <Navbar />
        <div className="flex flex-col items-center w-full">
          <div className={`${style.maincontainer} py-10`}>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-medium text-center">Достижения</p>
              <p className="text-base text-gray-400 text-center font-normal">Проходи задания и получай Достижения</p>
            </div>
            <div className="flex flex-wrap gap-4">

              <div className={`${style.achive} ${isActive(0) && style.achiveactive}`}>
                <div className="w-20 h-20 bg-sky-200 rounded-xl">
                  <img src="\vendory\diamond 1.png" className="w-20 h-20" alt="" />
                </div>
                <div className="gap-2">
                  <p className="text-xl font-medium text-center">{achivList[0][0].name}</p>
                  <p className="text-base text-center text-gray-400">Заработай 100 валюты</p>
                </div>
              </div>

              <div className={`${style.achive} ${isActive(1) && style.achiveactive}`}>
                <div className="w-20 h-20 bg-lime-500 rounded-xl">
                  <img src="\vendory\crocodile-icon-cartoon.png" alt="" />
                </div>
                <div className="gap-2">
                  <p className="text-xl font-medium text-center">{achivList[0][1].name}</p>
                  <p className="text-base text-center text-gray-400">Пройди первый тест</p>
                </div>
              </div>

              <div className={`${style.achive} ${isActive(2) && style.achiveactive}`}>
                <div className="w-20 h-20  rounded-xl">
                  <img src="\vendory\aspirant.png" alt="" />
                </div>
                <div className="gap-2">
                  <p className="text-xl font-medium text-center">{achivList[0][2].name}</p>
                  <p className="text-base text-center text-gray-400">Достигни уровня аспирант</p>
                </div>
              </div>

              <div className={`${style.achive} ${isActive(3) && style.achiveactive}`}>
                <div className="w-20 h-20 bg-blue-600 rounded-xl">
                  <img src="\vendory\lightning 21.png" alt="" />
                </div>
                <div className="gap-2">
                  <p className="text-xl font-medium text-center">{achivList[0][3].name}</p>
                  <p className="text-base text-center text-gray-400">Обменяй валюту на реальные баллы</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Achievements };
