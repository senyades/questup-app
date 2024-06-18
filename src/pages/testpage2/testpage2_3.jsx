import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';
import { useLocation } from 'react-router-dom';

function Testpage2_3() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);


  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests/play/1'}/>
      {fireworkstrue === true && <Firework diamonds={5} exp={50} page={4} text={"Ты прошел тест"}/>}
      <div className="flex w-full flex-col items-center h-full gap-8 overflow-y-scroll py-20"  >
      <div className="flex w-2/6 flex-row items-center gap-8 justify-center " >
      <img src="\vendory\character.png" alt="" className={`${styles.imga}`} />

          <div className="flex flex-col gap-4 content-center items-center"> 
          <p>
            <span className="text-xl text-black w-full font-semibold">  Начнем с понятия «Цифровая грамотность»</span>
          </p>


          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}>
            
            <p>Понятие <span className=" font-bold text-black">«цифровая грамотность»</span> впервые ввел <span className=" text-black font-medium">Пол Гилстер</span>, американский писатель и журналист в 1997 году.</p>
            
             </div>

             <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}>
            
            <p className="italic">«Цифровая грамотность – это умение понимать и использовать информацию, предоставленную во множестве разнообразных форматов и широкого круга источников с помощью компьютеров».</p>
            
           

             </div>
             <img src="\vendory\slide6.png" alt="" />
         
             <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}>
            
            <p>В свете широкого распространения интернет-технологий, понимание цифровой грамотности <span className="text-black font-bold">быстро меняется.</span> Есть множество других определений. Например: </p>
            
             </div>

             <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}>
            
            <p className="italic">Цифровая грамотность — это набор знаний, умений и навыков, которые необходимы для жизни в современном мире, для безопасного и эффективного использования цифровых технологий и ресурсов интернета.</p>
            

             </div>

          </div>
   
      </div>
      </div>
     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 2 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Далее</Button></div>
        }
        
        {test_data[0][0].thema != 2 &&
          <div className="w-40"> <Button onClick={()=> {handlePageChange(4)}}>Далее</Button></div>
        }
       
     </div>
    </div>
  );
}

export { Testpage2_3 };
