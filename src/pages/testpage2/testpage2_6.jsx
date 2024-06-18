import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';
import { useLocation } from 'react-router-dom';

function Testpage2_6() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);


  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests/play/1'}/>
      <div className="flex w-full justify-center flex-row items-center h-full gap-8">
      {fireworkstrue === true && <Firework diamonds={5} exp={50} page={7} text={"Ты прошел тест"}/>}

          <div className="flex flex-col gap-4 content-center items-center"> 


          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}>
            
            <p>Найдите в Интернете определение понятия «Цифровая грамотность». Запишите его в общую таблицу. Постарайтесь не повторяться!             </p>
            
             </div>

             <a href="https://docs.google.com/spreadsheets/d/1_-HBPLLOP4YNrM5oOOGNQXMB42YZvDVOQFP8FSyMdo0/edit" className=" bg-sky-600 px-10 py-2 rounded-full text-white hover:bg-sky-400" target="_blank">Таблица</a>
         
             <img src="\vendory\character.png" alt="" className={`${styles.imga}`} />

          </div>
   
      </div>
     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 2 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Далее</Button></div>
        }
        
        {test_data[0][0].thema != 2 &&
         <div className="w-40"> <Button onClick={()=> {handlePageChange(7)}}>Далее</Button></div>
        }
       
     </div>
    </div>
  );
}

export { Testpage2_6 };
