import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';
import { useLocation } from 'react-router-dom';

function Testpage2_1() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);


  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests/play/1'}/>
      <div className="flex w-2/6 flex-row items-center h-full  gap-8 justify-center ">
      {fireworkstrue === true && <Firework diamonds={5} exp={50} page={2} text={"Ты прочитал введение"}/>}

          <div className="flex flex-col gap-4 content-center items-center"> 
          <p>
            <span className="text-xl text-black w-full font-semibold">Что такое цифровая грамотность</span>
          </p>

          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2 w-full`}>Цифровая грамотность = медиаграмотность
          = информационная грамотность = компьютерная грамотность </div>

          <img src="\vendory\slide5.png" alt="" />

          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}>
            
            <p>Наравне с понятием <span className="text-black w-full font-semibold">цифровая грамотность</span> используются такие понятия как ИКТ-компетентность / медиаграмотность / информационная грамотность / компьютерная грамотность и другие.</p>
            
             </div>
         


          </div>
   
      </div>
     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 2 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Далее</Button></div>
        }
        
        {test_data[0][0].thema != 2 &&
          <div className="w-40"> <Button onClick={()=> {handlePageChange(2)}}>Далее</Button></div>
        }
       
     </div>
    </div>
  );
}

export { Testpage2_1 };
