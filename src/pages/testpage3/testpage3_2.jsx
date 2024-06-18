import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';
import { useLocation } from 'react-router-dom';

function Testpage3_2() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);


  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests'}/>
      <div className="flex w-full items-center h-full gap-8 overflow-y-scroll">
      {fireworkstrue === true && <Firework diamonds={5} exp={50} page={3} text={"Ты прочитал информацию"}/>}
      <div className="flex flex-row w-full justify-center h-full py-9">
        <div>  <img src="\vendory\character.png" alt="" className={`${styles.imga}`} /></div>
    
          <div className="flex flex-col gap-4 content-center items-center"> 
          <p>
            <span className="text-xl text-black w-full font-semibold">Компетенция и компетентность</span>
          </p>

          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2 w-full`}>
            <div className=" bg-gray-200 px-4 py-2 rounded-full text-black">ЧТО?</div>
          <p><span className="text-black">Компетенция</span> — это знания, умения, навыки, модели поведения и личностные характеристики, при помощи которых достигаются желаемые результаты. <span className="italic text-black">Способность успешно действовать на основе практического опыта, умения и знаний.</span> </p>
          </div>
          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2 w-full`}>
            <div className=" bg-gray-200 px-4 py-2 rounded-full text-black">КАК?</div>
          <p><span className="text-black">Компетентность </span> — это результаты, которые определяют эффективную работу. Компетентность подразумевает демонстрацию умений на деле — в реальных рабочих ситуациях, а не только знание теории или понимание того, как это делается.</p>
          </div>
          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2 w-full`}>
            <span className="text-black">Компетенция = наличие</span>
            <span> З+У+Н и модели поведения.</span> 
          <p><span className="text-black">Компетентность </span> — умение использовать эти знания в ходе трудовой деятельности. Компетентность = знаю + умею + хочу + делаю
          </p>
          </div>
          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2 w-full`}>
          <p> Компетенции, можно условно поделить на универсальные и профессиональные - soft skills и hard skills, так называемые мягкие / гибкие и жесткие навыки.
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
          <div className="w-40"> <Button onClick={()=> {handlePageChange(3)}}>Далее</Button></div>
        }
       
     </div>
    </div>
  );
}

export { Testpage3_2 };
