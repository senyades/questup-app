import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';

function Testpage_6() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);

  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests/play/1'}/>
      <div className="flex w-full overflow-y-auto flex-row items-center h-full  gap-8 justify-center ">
      {fireworkstrue === true && <Firework diamonds={8} exp={40} page={8}/>}

      <div  className={` w-full flex flex-col h-full items-center gap-4`}>
        <div className="flex flex-col py-10" style={{width: `600px`}}>
        <p className="text-lg text-gray-400">Итак, если вы умеете </p>
        <div className={`${styles.infoblock} mt-4 text-xl flex flex-row gap-4 text-wrap justify-start`}>
        <img src="\vendory\phone.png" alt="" />
        <p>Использовать смартфон для отправки электронной почты</p>
            </div>

            <div className={`${styles.infoblock} mt-4 text-xl flex flex-row gap-4 text-wrap justify-start`}>
        <img src="\vendory\laptop.png" alt="" />
        <p>Использовать ноутбук для создания презентации</p>
            </div>

            <div className={`${styles.infoblock} mt-4 text-xl flex flex-row gap-4 text-wrap justify-start`}>
        <img src="\vendory\nfc.png" alt="" />
        <p>Использоваться  NFC в банковских карточках и смартфонах</p>
            </div>

            <div className={`${styles.infoblock}  mt-4 text-xl flex flex-row gap-4 text-wrap justify-start`}>
        <img src="\vendory\smart-watch.png" alt="" />
        <p>Использовать умные часы для звонка </p>
            </div>

            <p className="text-lg pt-4 pb-4 text-gray-400">Все это <span className="text-black">примеры цифровой грамотности</span> и демонстрируют вашу способность успешно понимать и использовать технологии для достижения цель. </p>
            <p className="text-lg pb-4 text-gray-400">Умение пользоваться разными сервисами в интернете — цифровая грамотность, <span className="text-black">но нулевого уровня</span>. От того, что вы можете написать что-то другу в соцсети, вы не становитесь востребованными на рынке труда и защищенным.</p>
            <p className="text-lg text-gray-400">Становится понятно, что цифровая грамотность — это не только умение использовать свой компьютер или смартфон для просмотра видео в интернете. Понятие цифровой грамотности включает в себя большой спектр компетенций: от использования цифровых технологий и программирования до защиты от взлома и хищения персональных данных. </p>
        </div>
        </div>
      </div>

     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 1 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Далее</Button></div>
        }
        
        {test_data[0][0].thema != 1 &&
          <div className="w-40"> <Button onClick={()=> {handlePageChange(8)}}>Далее</Button></div>
        }
     </div>
    </div>
  );
}

export { Testpage_6 };
