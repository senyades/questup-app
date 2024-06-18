import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';
import { useLocation } from 'react-router-dom';

function Testpage2_2() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);


  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests/play/1'}/>
      <div className="flex w-2/6 flex-row items-center h-full  gap-8 justify-center ">
      {fireworkstrue === true && <Firework diamonds={5} exp={50} page={3} text={"Ты изучил информацию"}/>}
      <img src="\vendory\character.png" alt="" className={`${styles.imga}`} />

          <div className="flex flex-col gap-4 content-center items-center"> 
          <p>
            <span className="text-xl text-black w-full font-semibold"> Цифровая грамотность =  компьютерная грамотность?</span>
          </p>

            
          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2 w-full`}> <p><span className=" text-orange-800 font-semibold bg-orange-300 p-2 px-4 rounded-full">Грамотность</span> в широком понимании термина — умение читать и понимать прочитанное, способность писать согласно установленным нормам грамматики и правописания.</p>  </div>

          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}>
            
            <p>Чтобы быть грамотным сегодня, больше недостаточно владеть элементарными навыками чтения, счета и письма — необходимо уметь их <span className="text-black font-semibold">применять в цифровой среде</span>, в перенасыщенном информационном пространстве. 
            Поэтому, помимо привычных нам читательской и математической, ученые стали выделять новые типы грамотности.</p>
            
             </div>
         


          </div>
   
      </div>
     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 2 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Далее</Button></div>
        }
        
        {test_data[0][0].thema != 2 &&
          <div className="w-40"> <Button onClick={()=> {handlePageChange(3)}}>Далее</Button></div>
        }
       
     </div>
    </div>
  );
}

export { Testpage2_2 };
