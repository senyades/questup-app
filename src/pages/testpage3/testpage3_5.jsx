import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';
import { useLocation } from 'react-router-dom';

function Testpage3_5() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);


  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests'}/>
      <div className="flex w-full flex-row items-center h-full  gap-8 justify-center overflow-y-scroll">
      {fireworkstrue === true && <Firework diamonds={5} exp={50} page={6} text={"Ты прочитал введение"}/>}
      <div className="w-full h-full flex flex-row justify-center py-10">
        <div>
      <img src="\vendory\character.png" alt="" />
      </div>
          <div className="flex flex-col gap-4 content-center items-center"> 
          <p>
            <span className="text-xl text-black w-full font-semibold">Цифровые компетенции</span>
          </p>

          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2 w-full`}>В рамках общего психолого-педагогического подхода в России выделяется концепция цифровой компетентности, разработанная группой исследователей с факультета психологии МГУ им. М.В. Ломоносова под руководством Г.У. Солдатовой. 
В понимании Г. У. Солдатовой и ее коллег, цифровая компетентность включает в себя четыре компонента
знания, 
умения, 
мотивацию, 
ответственность, причем последняя связана с безопасностью.
 
          </div>


          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}>
            
            <p>
            «Под цифровой компетентностью мы понимаем основанную на непрерывном овладении компетенциями (знания, умения, мотивация, ответственность) способность индивида уверенно, эффективно, критично и безопасно выбирать и применять инфо-коммуникационные технологии в разных сферах жизнедеятельности, а также его готовность к такой деятельности. 
Иными словами, цифровая компетентность – это не только сумма универсальных и профессиональных знаний и умений, но и установка на эффективную деятельность и личное отношение к ней, основанное на чувстве ответственности.»


</p>
            
             </div>
         


          </div>
          </div>
      </div>
     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 3 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Далее</Button></div>
        }
        
        {test_data[0][0].thema != 3 &&
          <div className="w-40"> <Button onClick={()=> {handlePageChange(6)}}>Далее</Button></div>
        }
       
     </div>
    </div>
  );
}

export { Testpage3_5 };
