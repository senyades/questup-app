import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';

function Testpage_4() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);

  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests/play/1'}/>
      {fireworkstrue === true && <Firework diamonds={4} exp={40} page={5} text={"Вы узнали что такое цифровая грамотность"}/>}
      <div className="overflow-y-auto w-full p-10 h-full">
       
      <div className="flex w-full flex-row items-center gap-8 justify-center h-full">
      <img src="\vendory\character-another-pose.png" alt="" className={`${styles.imga}`} />

      <div className="flex flex-col gap-4">
      <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col items-start gap-0 text-wrap`}>
      <p className="text-xl w-full text-black font-semibold pb-4">ЦИФРОВАЯ ГРАМОТНОСТЬ</p>
          <p>
          Цифровизация в России определяется национальная программа <span className="text-sky-500">«Цифровая экономика Российской Федерации»</span>, принятая в <span className="text-sky-500">августе 2017 г</span>. – государственная платформа, позволяющая создать принципиально новую <i>схему отношений между бизнесом, государством и научным сообществом</i> для повышения конкурентоспособности страны на глобальном уровне.
          Одним из ключевых понятий программы является понятие «цифровая грамотность». Что же это такое? Понятие «цифровая грамотность» относится к таким категориям, которые находятся в постоянном движении. Это понятие постоянно меняется и расширяется. 
          </p>
          </div>
          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col items-start gap-0 text-wrap`}>
            <p>Одним из ключевых понятий программы является <span className="text-black font-semibold">понятие «цифровая грамотность»</span>. Что же это такое? Понятие «цифровая грамотность» относится к таким категориям, которые находятся в постоянном движении. Это понятие постоянно меняется и расширяется. </p>
          </div>
      </div>
       
          
        </div>

        </div>
     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 1 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Далее</Button></div>
        }
        
        {test_data[0][0].thema != 1 &&
          <div className="w-40"> <Button onClick={()=> {handlePageChange(5)}}>Далее</Button></div>
        }
     </div>
     </div>
    

  );
}

export { Testpage_4};
