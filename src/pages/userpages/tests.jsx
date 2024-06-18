import { React, useContext, useState, useEffect } from "react";
import Navbar from '../../components/molecule/navbar';
import Header from '../../components/molecule/header';
import Button from "../../components/buttons/button";
import ButtonGray from "../../components/buttons/button_gray";
import { TestContext } from "../../context/TestsContext";
import { AuthContext } from "../../context/AuthContext";
import { InventoryContext } from "../../context/InventoryContext";
import { NavLink } from "react-router-dom";
import styles from "./test.module.scss"
import {Loader} from "../loader"
import { useSnackbar } from 'notistack'; // Import useSnackbar from notistack

function Tests() {
  const { enqueueSnackbar } = useSnackbar();
  const { test_data, GetTestData, updateBlock, newviewTestPage, thisthema, TestBlockedByUser} = useContext(TestContext);
  const {updateDiamonds} = useContext(InventoryContext)
  const {data} = useContext(AuthContext)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await GetTestData();
     

      setTimeout(() => setLoading(false), 1000); // Задержка в 2 секунды перед скрытием лоадера
    };

    fetchData();

    if((data.inventory.exp>2000) && (test_data[0][5].blocked == true))
      {
        TestBlockedByUser({testId: 6, isBlocked: false});
      }
  }, []);

  useEffect(() => {
    newviewTestPage(false);

   
  }, []);

  const buyblock = (testId, summ, isBlocked) =>
  {
    try
    {
     
      if(data.inventory.diamonds > 100)
        {
          const diamonds = summ;
          console.log("Новое количество:", diamonds)
          updateDiamonds({diamonds});
          enqueueSnackbar("Вы купили тест", { variant: 'success' });
          console.log(testId, isBlocked)
          TestBlockedByUser({testId, isBlocked});
        }
      else
      {
        enqueueSnackbar("Не хватает валюты", { variant: 'error' });
      }
      GetTestData();
    }
    catch
    {
      enqueueSnackbar("Какая-то ошибка", { variant: 'error' });
  
    }
   
  }


  const isBlocked = (testId) => {
    if (!test_data || !test_data[0]) return false;
    return !!test_data[0][testId - 1]?.blocked;
  }

  const isView = (testId) => {
    if (!test_data || !test_data[0]) return false;
    return !!test_data[0][testId - 1]?.view;
  }

  if (loading) {
    return <Loader/>; // Здесь можно использовать ваш компонент Loader
  }
  return (
    <div className="flex flex-col h-screen bg-[#f9fafb]">
      <Header/>
      <div className="flex flex-row grow w-full " style={{height: `91%`}}>
        <Navbar />
        <div  className={` w-full flex flex-col pt-10 pb-10 items-center overflow-y-auto gap-4`}>

          <div className={`${styles.maincontainer}`}>
              <div className="w-full flex flex-col items-start text-2xl text-center font-medium">Цифровая грамотность <span className="text-base text-gray-500 font-normal">Проходи тесты связанные с цифровыми сервисами и зарабатывай баллы</span></div>
              <div className="w-full h-full flex flex-wrap gap-4">
                <div onClick={()=> {updateBlock(1)}}>
                    {!isView(1) && !isBlocked(1) && 
                    <NavLink to={`/tests/play/1`} className={`${styles.testblock}`}>
                    <div className="flex flex-row justify-between w-full">
                     <img src="\vendory\computer2.png" alt="" className="w-20 h-20"/>

                    <div className="flex flex-col items-end gap-2">
                      <div className={`${styles.easy} text-sm`}>ПРОСТОЙ</div>
                      <div className="flex flex-row  gap-2">
                        <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_251_188)">
                            <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_251_188">
                              <rect width="16" height="16" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                          +350
                          </div>
                        <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                            </svg>
                          +1600
                          </div>
                      </div>
                    </div>
                    </div>
                    <span className="text-xl text-start font-medium"> Основы цифровой грамотности</span>
                    <span className="text-sm text-gray-500 font-normal">Тест связан с основными понятиями цифровой грамотности и базовыми правилами</span>
                    <span className="text-sm text-gray-500 font-normal">~30 мин</span>


                    </NavLink>}
                  {isView(1) &&
                   <NavLink to={`/tests/play/1`} className={`${styles.testblock} ${styles.view}`}>
                   <div className="flex flex-row justify-between w-full">
                    <img src="\vendory\computer2.png" alt="" className="w-20 h-20"/>

                   <div className="flex flex-col items-end gap-2">
                     <div className={`${styles.easy} text-sm`}>ПРОСТОЙ</div>
                     <div className="flex flex-row  gap-2">
                       <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                         <g clip-path="url(#clip0_251_188)">
                           <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                         </g>
                         <defs>
                           <clipPath id="clip0_251_188">
                             <rect width="16" height="16" fill="white"/>
                           </clipPath>
                         </defs>
                       </svg>
                         +350
                         </div>
                       <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                             <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                           </svg>
                         +1600
                         </div>
                     </div>
                   </div>
                   </div>
                   <span className="text-xl text-start font-medium"> Основы цифровой грамотности</span>
                   <span className="text-sm text-gray-500 font-normal">Тест связан с основными понятиями цифровой грамотности и базовыми правилами</span>
                   <span className="text-sm text-gray-500 font-normal">~30 минут / Пройдено</span>


                  </NavLink>
                  }
                   {isBlocked(1) &&
                   <div className={`${styles.blocked}`}>
                    <div className={`${styles.testblock} ${styles.view}`}>
                   <div className="flex flex-row justify-between w-full">
                    <img src="\vendory\computer2.png" alt="" className="w-20 h-20"/>

                   <div className="flex flex-col items-end gap-2">
                     <div className={`${styles.easy} text-sm`}>ПРОСТОЙ</div>
                     <div className="flex flex-row  gap-2">
                       <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                         <g clip-path="url(#clip0_251_188)">
                           <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                         </g>
                         <defs>
                           <clipPath id="clip0_251_188">
                             <rect width="16" height="16" fill="white"/>
                           </clipPath>
                         </defs>
                       </svg>
                         +350
                         </div>
                       <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                             <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                           </svg>
                         +1600
                         </div>
                     </div>
                   </div>
                   </div>
                   <span className="text-xl text-start font-medium"> Основы цифровой грамотности</span>
                   <span className="text-sm text-gray-500 font-normal">Тест связан с основными понятиями цифровой грамотности и базовыми правилами</span>
                   <span className="text-sm text-gray-500 font-normal">~30 минут / Пройдено</span>


                  </div>
                 </div>
                  }
                </div>

                <div onClick={()=> {updateBlock(2)}}>
                  {!isView(2) && !isBlocked(2) &&
                    <NavLink to={`/tests/play/2`} className={`${styles.testblock}`}>
                    <div className="flex flex-row justify-between w-full">
                        <img src="\vendory\cloud.png" alt="" className="w-20 h-20"/>

                    <div className="flex flex-col items-end gap-2">
                      <div className={`${styles.easy} text-sm`}>ПРОСТОЙ</div>
                      <div className="flex flex-row  gap-2">
                        <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_251_188)">
                            <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_251_188">
                              <rect width="16" height="16" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                          +150
                          </div>
                        <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                            </svg>
                          +600
                          </div>
                      </div>
                    </div>
                    </div>
                    <span className="text-xl text-start font-medium"> Облачные технологии</span>
                    <span className="text-sm text-gray-500 font-normal">Задания по теме облачные технологии, основные понятия и способы взаимодействия</span>
                    <span className="text-sm text-gray-500 font-normal">~15 минут</span>
                      
                  </NavLink>
                  }
                  {isView(2) &&
                    <NavLink to={`/tests/play/2`} className={`${styles.testblock} ${styles.view}`}>
                    <div className="flex flex-row justify-between w-full">
                        <img src="\vendory\cloud.png" alt="" className="w-20 h-20"/>

                    <div className="flex flex-col items-end gap-2">
                      <div className={`${styles.easy} text-sm`}>ПРОСТОЙ</div>
                      <div className="flex flex-row  gap-2">
                        <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_251_188)">
                            <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_251_188">
                              <rect width="16" height="16" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                          +150
                          </div>
                        <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                            </svg>
                          +600
                          </div>
                      </div>
                    </div>
                    </div>
                    <span className="text-xl text-start font-medium"> Облачные технологии</span>
                    <span className="text-sm text-gray-500 font-normal">Задания по теме облачные технологии, основные понятия и способы взаимодействия</span>
                    <span className="text-sm text-gray-500 font-normal">~15 минут / Пройдено</span>
                      
                    </NavLink>
                  }
                  {isBlocked(2) && 
                    <div className={`${styles.blockedmain}`}>
                     
                     <div className="flex flex-row justify-between w-full">
                        <img src="\vendory\cloud.png" alt="" className="w-20 h-20"/>

                    <div className="flex flex-col items-end gap-2">
                      <div className={`${styles.easy} text-sm`}>ПРОСТОЙ</div>
                      <div className="flex flex-row  gap-2">
                        <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_251_188)">
                            <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_251_188">
                              <rect width="16" height="16" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                          +150
                          </div>
                        <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                            </svg>
                          +600
                          </div>
                      </div>
                    </div>
                    </div>
                    <span className="text-xl text-start font-medium"> Облачные технологии</span>
                    <span className="text-sm text-gray-500 font-normal">Задания по теме облачные технологии, основные понятия и способы взаимодействия</span>
                    <span className="text-sm text-gray-500 font-normal">~15 минут</span>
                      
                    </div>
                  }
                </div>

                <div onClick={()=> {updateBlock(3)}}>
                  {!isView(3) && !isBlocked(3) &&
                    <NavLink to={`/tests/play/3`} className={`${styles.testblock}`}>
                    <div className="flex flex-row justify-between w-full">
                       <img src="\vendory\information.png" alt="" className="w-20 h-20"/>

                    <div className="flex flex-col items-end gap-2">
                      <div className={`${styles.middle} text-sm`}>СРЕДНИЙ</div>
                      <div className="flex flex-row  gap-2">
                        <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_251_188)">
                            <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_251_188">
                              <rect width="16" height="16" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                          +150
                          </div>
                        <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                            </svg>
                          +400
                          </div>
                      </div>
                    </div>
                    </div>
                    <span className="text-xl text-start font-medium"> Информационная грамотность</span>
                    <span className="text-sm text-gray-500 font-normal">Основные понятия информационной грамотности, виды и базовые правила</span>
                    <span className="text-sm text-gray-500 font-normal">~5 минут</span>
                     
                  </NavLink>
                  }
                  {isView(3) &&
                      <NavLink to={`/tests/play/3`} className={`${styles.testblock} ${styles.view}`}>
                      <div className="flex flex-row justify-between w-full">
                         <img src="\vendory\information.png" alt="" className="w-20 h-20"/>
  
                      <div className="flex flex-col items-end gap-2">
                        <div className={`${styles.middle} text-sm`}>СРЕДНИЙ</div>
                        <div className="flex flex-row  gap-2">
                          <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_251_188)">
                              <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_251_188">
                                <rect width="16" height="16" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                            +150
                            </div>
                          <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                              </svg>
                            +400
                            </div>
                        </div>
                      </div>
                      </div>
                      <span className="text-xl text-start font-medium"> Информационная грамотность</span>
                      <span className="text-sm text-gray-500 font-normal">Основные понятия информационной грамотности, виды и базовые правила</span>
                      <span className="text-sm text-gray-500 font-normal">~5 минут / Пройдено</span>
                       
                    </NavLink>
                  }
                  {isBlocked(3) && 
                    <div className={`${styles.blockedmain}`}>
                     <div className="flex flex-row justify-between w-full">
                         <img src="\vendory\information.png" alt="" className="w-20 h-20"/>
  
                      <div className="flex flex-col items-end gap-2">
                        <div className={`${styles.middle} text-sm`}>СРЕДНИЙ</div>
                        <div className="flex flex-row  gap-2">
                          <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_251_188)">
                              <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                            </g>
                            <defs>
                              <clipPath id="clip0_251_188">
                                <rect width="16" height="16" fill="white"/>
                              </clipPath>
                            </defs>
                          </svg>
                            +150
                            </div>
                          <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                              </svg>
                            +400
                            </div>
                        </div>
                      </div>
                      </div>
                      <span className="text-xl text-start font-medium"> Информационная грамотность</span>
                      <span className="text-sm text-gray-500 font-normal">Основные понятия информационной грамотности, виды и базовые правила</span>
                      <span className="text-sm text-gray-500 font-normal">~5 минут</span>
                    
                    
                  </div>
                  }
                </div>

                <div onClick={()=> {updateBlock(4)}}>
                  {!isView(4) && !isBlocked(4) &&
                  <NavLink to={`/tests/play/4`} className={`${styles.testblock}`}>
                    <div className="flex flex-row justify-between w-full">
                       <img src="\vendory\content.png" alt="" className="w-20 h-20"/>

                    <div className="flex flex-col items-end gap-2">
                      <div className={`${styles.hard} text-sm`}>ВЫСОКИЙ</div>
                      <div className="flex flex-row  gap-2">
                        <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_251_188)">
                            <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_251_188">
                              <rect width="16" height="16" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                          +150
                          </div>
                        <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                            </svg>
                          +100
                          </div>
                      </div>
                    </div>
                    </div>
                    <span className="text-xl text-start font-medium"> Создание контента</span>
                    <span className="text-sm text-gray-500 font-normal">Методы создания контента, основные инструменты и способы освоения</span>
                    <span className="text-sm text-gray-500 font-normal">~25 минут</span>
                     
                  </NavLink>
                  
                  }
                  {isView(4) &&
                      
                  <NavLink to={`/tests/play/4`} className={`${styles.testblock} ${ styles.view}`}>
                  <div className="flex flex-row justify-between w-full">
                     <img src="\vendory\content.png" alt="" className="w-20 h-20"/>

                  <div className="flex flex-col items-end gap-2">
                    <div className={`${styles.hard} text-sm`}>ВЫСОКИЙ</div>
                    <div className="flex flex-row  gap-2">
                      <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_251_188)">
                          <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_251_188">
                            <rect width="16" height="16" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                        +150
                        </div>
                      <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                          </svg>
                        +100
                        </div>
                    </div>
                  </div>
                  </div>
                  <span className="text-xl text-start font-medium"> Создание контента</span>
                  <span className="text-sm text-gray-500 font-normal">Методы создания контента, основные инструменты и способы освоения</span>
                  <span className="text-sm text-gray-500 font-normal">~25 минут</span>
                   
                </NavLink>
                
                  }
                  {isBlocked(4) && 
                    <div className={`${styles.blockedmain}`}>
                     
                     <div className="flex flex-row justify-between w-full">
                     <img src="\vendory\content.png" alt="" className="w-20 h-20"/>

                  <div className="flex flex-col items-end gap-2">
                    <div className={`${styles.hard} text-sm`}>ВЫСОКИЙ</div>
                    <div className="flex flex-row  gap-2">
                      <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_251_188)">
                          <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_251_188">
                            <rect width="16" height="16" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                        +150
                        </div>
                      <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                          </svg>
                        +100
                        </div>
                    </div>
                  </div>
                  </div>
                  <span className="text-xl text-start font-medium"> Создание контента</span>
                  <span className="text-sm text-gray-500 font-normal">Методы создания контента, основные инструменты и способы освоения</span>
                  <span className="text-sm text-gray-500 font-normal">~5 минут</span>
                    
                  </div>
                  }
                </div>
                 
                <div onClick={()=> {updateBlock(5)}}>
                  {!isView(5) && !isBlocked(5) &&
                  <NavLink to={`/tests/play/5`} className={`${styles.testblock}`}>
                    <div className="flex flex-row justify-between w-full">
                       <img src="\vendory\brain.png" alt="" className="w-20 h-20"/>

                    <div className="flex flex-col items-end gap-2">
                      <div className={`${styles.middle} text-sm`}>СРЕДНИЙ</div>
                      <div className="flex flex-row  gap-2">
                        <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_251_188)">
                            <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_251_188">
                              <rect width="16" height="16" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                          +300
                          </div>
                        <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                            </svg>
                          +600
                          </div>
                      </div>
                    </div>
                    </div>
                    <span className="text-xl text-start font-medium"> Проверка знаний</span>
                    <span className="text-sm text-gray-500 font-normal">Дополнительные тесты по всем темам</span>
                    <span className="text-sm text-gray-500 font-normal">~8 минут</span>
                     
                  </NavLink>
                  
                  }
                  {isView(5) &&
                      
                  <NavLink to={`/tests/play/5`} className={`${styles.testblock} ${ styles.view}`}>
                  <div className="flex flex-row justify-between w-full">
                     <img src="\vendory\brain.png" alt="" className="w-20 h-20"/>

                  <div className="flex flex-col items-end gap-2">
                    <div className={`${styles.hard} text-sm`}>ВЫСОКИЙ</div>
                    <div className="flex flex-row  gap-2">
                      <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_251_188)">
                          <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_251_188">
                            <rect width="16" height="16" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                        +150
                        </div>
                      <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                          </svg>
                        +100
                        </div>
                    </div>
                  </div>
                  </div>
                  <span className="text-xl text-start font-medium"> Проверка знаний</span>
                  <span className="text-sm text-gray-500 font-normal">Дополнительные тесты по всем темам</span>
                  <span className="text-sm text-gray-500 font-normal">~8 минут / Пройдено</span>
                   
                </NavLink>
                
                  }
                  {isBlocked(5) && 
                    <div className={`${styles.blocked}`}>
                      <div className="flex flex-col items-center gap-4 h-full justify-center">
                      <div className={`${styles.blockicon}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M20 7.5H17V5.25C17 4.05653 16.5259 2.91193 15.682 2.06802C14.8381 1.22411 13.6935 0.75 12.5 0.75C11.3065 0.75 10.1619 1.22411 9.31802 2.06802C8.47411 2.91193 8 4.05653 8 5.25V7.5H5C4.60218 7.5 4.22064 7.65804 3.93934 7.93934C3.65804 8.22064 3.5 8.60218 3.5 9V19.5C3.5 19.8978 3.65804 20.2794 3.93934 20.5607C4.22064 20.842 4.60218 21 5 21H20C20.3978 21 20.7794 20.842 21.0607 20.5607C21.342 20.2794 21.5 19.8978 21.5 19.5V9C21.5 8.60218 21.342 8.22064 21.0607 7.93934C20.7794 7.65804 20.3978 7.5 20 7.5ZM9.5 5.25C9.5 4.45435 9.81607 3.69129 10.3787 3.12868C10.9413 2.56607 11.7044 2.25 12.5 2.25C13.2956 2.25 14.0587 2.56607 14.6213 3.12868C15.1839 3.69129 15.5 4.45435 15.5 5.25V7.5H9.5V5.25Z" fill="#151515"/>
                      </svg>
                    </div>
                    <span>Этот блок заблокирован</span>
                      </div>
                      <ButtonGray onClick={()=> {buyblock(5, 100, false)}}>Открыть за 100 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                        <circle cx="11" cy="11" r="9" fill="#439DD7"/>
                                                      </svg>
                      </ButtonGray>
                    </div>
                  }
                </div>


                <div onClick={()=> {updateBlock(6)}}>
                  {!isView(6) && !isBlocked(6) &&
                  <NavLink to={`/tests/play/6`} className={`${styles.testblock}`}>
                    <div className="flex flex-row justify-between w-full">
                       <img src="\vendory\brain-and-2.png" alt="" className="w-20 h-20"/>

                    <div className="flex flex-col items-end gap-2">
                      <div className={`${styles.easy} text-sm`}>ПРОСТОЙ</div>
                      <div className="flex flex-row  gap-2">
                        <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_251_188)">
                            <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_251_188">
                              <rect width="16" height="16" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                          +150
                          </div>
                        <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                            </svg>
                          +100
                          </div>
                      </div>
                    </div>
                    </div>
                    <span className="text-xl text-start font-medium"> Дополнительный тест</span>
                    <span className="text-sm text-gray-500 font-normal">Проверка знаний для самых опытных</span>
                    <span className="text-sm text-gray-500 font-normal">~5 минут</span>
                     
                  </NavLink>
                  
                  }
                  {isView(6) &&
                      
                  <NavLink to={`/tests/play/6`} className={`${styles.testblock} ${ styles.view}`}>
                  <div className="flex flex-row justify-between w-full">
                     <img src="\vendory\brain-and-2.png" alt="" className="w-20 h-20"/>

                  <div className="flex flex-col items-end gap-2">
                    <div className={`${styles.easy} text-sm`}>ПРОСТОЙ</div>
                    <div className="flex flex-row  gap-2">
                      <div className="flex flex-row items-center gap-2 h-7 px-2 w border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <g clip-path="url(#clip0_251_188)">
                          <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_251_188">
                            <rect width="16" height="16" fill="white"/>
                          </clipPath>
                        </defs>
                      </svg>
                        +150
                        </div>
                      <div className="flex flex-row items-center gap-2 h-7 px-2 border-slate-200 bg-slate-50 rounded-lg text-sm text-gray-400 text-center font-normal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M13.3661 7.84082L6.36608 15.3408C6.29189 15.42 6.19398 15.4729 6.0871 15.4915C5.98022 15.5101 5.87019 15.4935 5.77359 15.4441C5.677 15.3947 5.59909 15.3153 5.55162 15.2177C5.50415 15.1201 5.4897 15.0098 5.51045 14.9033L6.4267 10.3202L2.82483 8.96769C2.74747 8.93876 2.67849 8.89111 2.62404 8.82901C2.56959 8.76691 2.53138 8.69229 2.5128 8.61181C2.49423 8.53134 2.49589 8.44751 2.51761 8.36783C2.53934 8.28815 2.58047 8.2151 2.63733 8.15519L9.63733 0.655191C9.71151 0.576025 9.80942 0.523135 9.9163 0.504501C10.0232 0.485867 10.1332 0.502501 10.2298 0.551892C10.3264 0.601282 10.4043 0.680751 10.4518 0.778304C10.4992 0.875858 10.5137 0.986204 10.493 1.09269L9.5742 5.68082L13.1761 7.03144C13.2529 7.06057 13.3213 7.10816 13.3753 7.17002C13.4293 7.23187 13.4673 7.30608 13.4858 7.38609C13.5044 7.46609 13.5029 7.54943 13.4816 7.62874C13.4603 7.70805 13.4197 7.78089 13.3636 7.84082H13.3661Z" fill="#FFC225"/>
                          </svg>
                        +100
                        </div>
                    </div>
                  </div>
                  </div>
                  <span className="text-xl text-start font-medium"> Дополнительный тест</span>
                    <span className="text-sm text-gray-500 font-normal">Проверка знаний для самых опытных</span>
                    <span className="text-sm text-gray-500 font-normal">~5 минут</span>
                </NavLink>
                
                  }
                  {isBlocked(6) && 
                    <div className={`${styles.blocked}`}>
                      <div className="flex flex-col items-center gap-4 h-full justify-center">
                      <div className={`${styles.blockicon}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M20 7.5H17V5.25C17 4.05653 16.5259 2.91193 15.682 2.06802C14.8381 1.22411 13.6935 0.75 12.5 0.75C11.3065 0.75 10.1619 1.22411 9.31802 2.06802C8.47411 2.91193 8 4.05653 8 5.25V7.5H5C4.60218 7.5 4.22064 7.65804 3.93934 7.93934C3.65804 8.22064 3.5 8.60218 3.5 9V19.5C3.5 19.8978 3.65804 20.2794 3.93934 20.5607C4.22064 20.842 4.60218 21 5 21H20C20.3978 21 20.7794 20.842 21.0607 20.5607C21.342 20.2794 21.5 19.8978 21.5 19.5V9C21.5 8.60218 21.342 8.22064 21.0607 7.93934C20.7794 7.65804 20.3978 7.5 20 7.5ZM9.5 5.25C9.5 4.45435 9.81607 3.69129 10.3787 3.12868C10.9413 2.56607 11.7044 2.25 12.5 2.25C13.2956 2.25 14.0587 2.56607 14.6213 3.12868C15.1839 3.69129 15.5 4.45435 15.5 5.25V7.5H9.5V5.25Z" fill="#151515"/>
                      </svg>
                    </div>
                    <span>Этот блок заблокирован</span>
                      </div>
                      <div className="flex flex-row justify-center gap-2 p-2 bg-slate-50 items-center text-base font-normal text-gray-400 text-center rounded-lg w-full">Нужен уровень: Магистр
                      </div>
                    </div>
                  }
                </div>
                  
              </div>
              </div>
        </div>
      </div>
    </div>
  );
}

export {Tests};
