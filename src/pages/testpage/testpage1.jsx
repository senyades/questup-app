import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';
import { useLocation } from 'react-router-dom';

function Testpage_1() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);


  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests/play/1'}/>
      <div className="flex w-2/6 flex-row items-center h-full  gap-8 justify-center ">
      {fireworkstrue === true && <Firework diamonds={5} exp={50} page={2} text={"Ты прочитал введение"}/>}
            <img src="\vendory\character.png" alt="" className={`${styles.imga}`} />

          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}> 
          <p>
            <span className="text-xl text-black w-full font-semibold">ЦИФРОВИЗАЦИЯ</span>
            <span> Сегодняшний тренд в быстро меняющемся мире — <span className="text-sky-500" >цифровизация</span>, охватившая различные сферы жизни общества. </span>
            <span>Мы живем в самый разгар цифровой революции. Сегодня количество людей, соединенных с интернетом несоизмеримо больше, чем когда-либо ранее. И эта концепция широко внедряется во всех без исключения странах.</span>
          </p>
          </div>
   
      </div>
     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 1 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Далее</Button></div>
        }
        
        {test_data[0][0].thema != 1 &&
          <div className="w-40"> <Button onClick={()=> {handlePageChange(2)}}>Далее</Button></div>
        }
       
     </div>
    </div>
  );
}

export { Testpage_1 };
