import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';
import { useLocation } from 'react-router-dom';

function Testpage2_7() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);


  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests/play/1'}/>
      {fireworkstrue === true && <Firework diamonds={5} exp={50} page={8} text={"Ты изучил информацию"}/>}
      <div className="flex w-full flex-col items-center h-full gap-8 overflow-y-scroll"  >
      <div className="flex flex-row gap-8" >
      <div className="flex flex-row py-10">
        <div> <img src="\vendory\character.png" alt="" />
        </div>
     
          <div className="flex flex-col gap-4 content-center items-center w-full pb-4"> 
          <p>
            <span className="text-xl text-black w-full font-semibold">  Что же входит в цифровую грамотность и почему она так важна?</span>
          </p>


          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}>
            
            <p>По мнению П. Гилстера: <span className="italic text-black">постоянное нахождение в Интернете, в поле гипертекста, дающего возможность быстрой навигации с одного ресурса на другой, формирует:</span>
            </p>
            
             </div>

             <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}>
                <p>новые паттерны поведения человека, 
                </p>
                <p>приемы поиска информации, 
                </p>
                <p>особенности общения. 
                </p>

             </div>
         
             <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}>
            
            <p>Это приводит к <span className="text-black">формированию сетевого мышления</span>, основная черта которого – высокая степень информационно-коммуникационной активности. 
</p>
            
             </div>

             <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}>
            
            <p>Пол Гилстер выделяет в качестве критериев достижения цифровой грамотности следующие навыки: 
            </p>

            <p>1) критерии достижения <span className=" font-medium bg-orange-300 p-2 py-1 rounded-full text-black">медиаграмотности</span> ;</p>
            <p>2) навыки <span className="text-black">поиска нужной информации</span> и инструментов работы с ней, умение быстро освоить эти инструменты <span className=" font-medium bg-orange-300 p-2 py-1 rounded-full text-black">(информационная грамотность)</span>;
            </p>
            <p>3) навыки <span className="text-black">общения</span> с другими пользователями <span className=" font-medium bg-orange-300 p-2 py-1 rounded-full text-black">(коммуникативная компетентность)</span> ;
            </p>
            <p>4) навыки <span>производства информации</span> в ее разнообразных формах и форматах <span className=" font-medium bg-orange-300 p-2 py-1 rounded-full text-black">(креативная компетентность)</span> . 
            </p>

             </div>
             <div>   <img src="\vendory\slide7.png" alt="" /></div>
          

          </div>
          </div>
      </div>
      </div>
     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 2 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Далее</Button></div>
        }
        
        {test_data[0][0].thema != 2 &&
          <div className="w-40"> <Button onClick={()=> {handlePageChange(8)}}>Далее</Button></div>
        }
       
     </div>
    </div>
  );
}

export { Testpage2_7 };
