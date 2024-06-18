import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/theme.module.scss";

function Themespage_2({ testId }) {
  const { test_data, handlePageChange, thisthema, newthisThema, updateTheme, GetTestData} = useContext(TestContext);
  const [activeThemes, setActiveThemes] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndProcess = async () => {
      handlePageChange(1);

      if(test_data[0][1].thema == 1 && thisthema != 0) {
        newthisThema(0);
   
      }

      if(thisthema == 1 && test_data[0][1].thema == 1) {
        await updateTheme(2, 2);
        await GetTestData();
        console.log("Первая тема пройдена");
      }

      if(thisthema == 2 && test_data[0][1].thema == 2) {
        await updateTheme(2, 3);
        await GetTestData();
        console.log("Вторая тема пройдена");
      }


      GetTestData();

      setIsLoading(false); // Все действия завершены, установка isLoading в false
    };

    fetchDataAndProcess();
  }, []);


  const isActive = (themeId, testId) => {
    // Проверяем, совпадает ли themeId с переданным в параметрах
    
    const isThemeActive = parseInt(test_data[0][1]?.thema) === parseInt(themeId);
    
    // Проверяем, совпадает ли testId с текущим testId
    const isTestIdActive = parseInt(testId) === parseInt(testId);
    
    // Возвращаем результат логического И для обоих проверок
    return isThemeActive && isTestIdActive;
  }

  const isView = (themeId) => {

    console.log(test_data[0][1].thema)
    // Создаем массив с числами от 1 до значения темы
    const themeNumbers = Array.from({ length: parseInt(test_data[0][1]?.thema) }, (_, index) => index);

    // Проверяем, есть ли themeId в массиве чисел
    const isThemeIdInView = themeNumbers.includes(parseInt(themeId));
    
    // Возвращаем результат логического И для обоих проверок
    return isThemeIdInView;
  }



  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
     <Header_Test GoLink={'/tests'}/>
      <div className="flex w-2/6 flex-col items-center h-full  gap-8 justify-center ">
          <div className="flex flex-col items-center content-center  w-full gap-1">
           
                <span className="text-2xl font-medium ">Облачные технологии</span>
                <span className=" text-base text-gray-500 text-center">Проходи открытые темы и разблокируй следующие</span>
          </div>
          {!isLoading&&
          <div className="flex flex-col gap-2 w-full">
            <NavLink to={`/tests/play/1/testpage`} onClick={()=> {newthisThema(1)}} className={`${styles.themeblock} ${isActive(1, testId) && styles.active} ${isView(1) && styles.view}`}>Основные понятия 
            <div className={`${styles.infotext} flex flex-row gap-2 `}>
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
            <svg className={`${styles.iconblocked}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19.5 7.5H16.5V5.25C16.5 4.05653 16.0259 2.91193 15.182 2.06802C14.3381 1.22411 13.1935 0.75 12 0.75C10.8065 0.75 9.66193 1.22411 8.81802 2.06802C7.97411 2.91193 7.5 4.05653 7.5 5.25V7.5H4.5C4.10218 7.5 3.72064 7.65804 3.43934 7.93934C3.15804 8.22064 3 8.60218 3 9V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V9C21 8.60218 20.842 8.22064 20.5607 7.93934C20.2794 7.65804 19.8978 7.5 19.5 7.5ZM9 5.25C9 4.45435 9.31607 3.69129 9.87868 3.12868C10.4413 2.56607 11.2044 2.25 12 2.25C12.7956 2.25 13.5587 2.56607 14.1213 3.12868C14.6839 3.69129 15 4.45435 15 5.25V7.5H9V5.25Z" fill="#151515"/>
            </svg>
            <span className="text-base text-gray-500 text-center">Пройдено</span>
            </NavLink>

          </div>
          }

<span className="w-full bg-white rounded-lg text-gray-500 mb-8 text-center p-4 opacity-45">Внимание тест можно начать только один раз. При последующем запуске валюта не будет начисляться!</span>
      </div>
     
    </div>
  );
}

export { Themespage_2 };
