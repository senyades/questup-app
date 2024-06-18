import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';
import { useLocation } from 'react-router-dom';

function Testpage3_1() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);


  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests/play/1'}/>
      <div className="flex w-2/6 flex-row items-center h-full  gap-8 justify-center ">
      {fireworkstrue === true && <Firework diamonds={5} exp={50} page={2} text={"Ты прочитал введение"}/>}
      <img src="\vendory\character.png" alt="" className={`${styles.imga}`} />
          <div className="flex flex-col gap-4 content-center items-center"> 
          <p>
            <span className="text-xl text-black w-full font-semibold">Цифровые компетенции</span>
          </p>

          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2 w-full`}>Цифровые компетенции - понятие довольно размытое. 
          </div>


          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}>
            
            <p>В самом широком смысле речь идет <span className="text-black">о знаниях, умениях  и навыках</span>,  которые позволяют взаимодействовать с программами и гаджетами. 
Чем больше они проникают в рабочие задачи и повседневную жизнь, тем эти навыки нужнее. Если их игнорировать, можно очень быстро прослыть человеком, который безнадежно отстал от жизни. Еще более неприятным образом это может отразиться на карьере — сегодня, когда мир переходит на удаленную работу, коллегу встречают не по одежке, а по «цифровому следу».
</p>
            
             </div>
         


          </div>
   
      </div>
     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 3 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Далее</Button></div>
        }
        
        {test_data[0][0].thema != 3 &&
          <div className="w-40"> <Button onClick={()=> {handlePageChange(2)}}>Далее</Button></div>
        }
       
     </div>
    </div>
  );
}

export { Testpage3_1 };
