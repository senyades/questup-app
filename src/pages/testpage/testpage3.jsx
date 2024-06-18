import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';

function Testpage_3() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);

  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests/play/1'}/>
      
      <div className="flex w-2/6 flex-row items-center h-full  gap-8 justify-center  ">
      {fireworkstrue === true && <Firework diamonds={4} exp={40} page={4} text={"Вы узнали правильный ответ"}/>}

      <img src="\vendory\character.png" alt="" className={`${styles.imga}`} />
          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-4`}>
              <div className='font-semibold text-emerald-900 uppercase bg-emerald-200 p-2 px-4 flex flex-col content-center rounded-full text-base'>Правильный ответ</div>
              <p className="pb-2 w-full text-black uppercase font-semibold">Что означает понятие цифровизации?</p>
              <p><span className="font-semibold pb-4 text-black">Цифровизация</span> – это процесс преобразования аналоговых данных и процессов в цифровой формат с использованием современных технологий и инструментов. </p>
              <p className="pb-2">Это означает, что информация, которая ранее хранилась в аналоговом виде (например, на бумаге), теперь переводится в цифровой вид, что делает ее более доступной, удобной для хранения и обработки.</p>
              <span> <i>Суть цифровизации заключается в замене традиционных аналоговых систем на цифровые, что позволяет обрабатывать, передавать и хранить большие объемы информации с использованием компьютеров и интернета.</i></span>
          </div>
   
      </div>
     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 1 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Далее</Button></div>
        }
        
        {test_data[0][0].thema != 1 &&
          <div className="w-40"> <Button onClick={()=> {handlePageChange(4)}}>Далее</Button></div>
        }
       
     </div>
    </div>
  );
}

export { Testpage_3};
