import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';

function Testpage_5_1() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);

  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
     <Header_Test GoLink={'/tests/play/1'}/>
      <div className="flex  flex-col items-center h-full  gap-8 justify-center ">
      {fireworkstrue === true && <Firework diamonds={10} exp={60} page={7}/>}
      <span className='text-xl font-semibold text-center'>Пройдите интерактивное задание:</span>
      <div className="flex relative">
        <div className="flex z-30">
          <iframe width="768" height="597" scrolling="no" src="https://app.playpos.it/go/share/1926101/1680624/0/0/---" allow="autoplay *;" allowfullscreen frameborder="0"></iframe>
        </div>
      
        <div className="absolute z-10 top-0">Загрузка</div>
      </div>
       
      </div>
     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 1 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Далее</Button></div>
        }
        
        {test_data[0][0].thema != 1 &&
          <div className="w-40"> <Button onClick={()=> {handlePageChange(7)}}>Далее</Button></div>
        }
     </div>
    </div>
  );
}

export { Testpage_5_1 };
