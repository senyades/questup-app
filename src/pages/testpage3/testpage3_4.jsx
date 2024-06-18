import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';
import { useLocation } from 'react-router-dom';

function Testpage3_4() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);


  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests'}/>
      {fireworkstrue === true && <Firework diamonds={5} exp={50} page={5} text={"Ты прочитал информацию"}/>}
      <div className="flex w-full overflow-y-scroll flex-row  h-full gap-8 ">
     
      <div className="w-full flex py-10 justify-center">
        <div><img src="\vendory\character.png" alt="" className={`${styles.imga}`} /></div>
      
          <div className="flex flex-col gap-4 content-center items-center"> 
          <p>
            <span className="text-xl text-black w-full font-semibold">Профессиональные компетенция </span>
          </p>

          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2 w-full`}>
          <span className="text-black">Hard skills</span> – профессиональные навыки, которые необходимы для выполнения конкретной работы. Этим навыкам обучают в колледжах, институтах, на курсах, их можно измерить путем проведения экзамена.
            К примеру, для фронтенд-разработчика hard skills выглядят так: владение HTML и CSS, знание JavaScript, умение разбираться в фреймворках и библиотеках, составлять SQL-запросы и т. п.
          </div>


          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}>
            
            <p>А для вашей будущей профессии какие Hard skills наиболее важны? Запишите ответ в общую таблицу</p>
            <a href="https://docs.google.com/spreadsheets/d/1_-HBPLLOP4YNrM5oOOGNQXMB42YZvDVOQFP8FSyMdo0/edit" className=" bg-sky-600 px-10 py-2 rounded-full text-white hover:bg-sky-400" target="_blank">Таблица</a>
             </div>

             <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2 w-full`}>
          <p>Помимо строго профессиональных навыков (hard skills), все больше внимания уделяется «гибким» навыкам, которые не относятся напрямую к сфере конкретной деятельности.
По мнению ученых Гарварда и Стэнфорда, 75–85% профессионального успеха зависит от наличия у специалиста soft skills и только 15–25% — от hard skills.
</p>
          </div>

          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2 w-full`}>
          <p> <span className="text-black">Soft Skills</span> – личные качества, которые зависят от характера человека и приобретаются с жизненным опытом. Такие универсальные компетенции трудно измерить количественными показателями. Они практически не зависят от специфики конкретной работы, но помогают строить карьеру. К ним относятся интеллектуальные, социальные и волевые компетенции:

</p>
<p>А для вашей будущей профессии какие Hard skills наиболее важны? Запишите ответ в общую таблицу</p>
<a href="https://docs.google.com/spreadsheets/d/1_-HBPLLOP4YNrM5oOOGNQXMB42YZvDVOQFP8FSyMdo0/edit?gid=0#gid=0" className=" bg-sky-600 px-10 py-2 rounded-full text-white hover:bg-sky-400" target="_blank">Таблица</a>
          </div>
         


          </div>
          </div>
      </div>
     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 3 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Далее</Button></div>
        }
        
        {test_data[0][0].thema != 3 &&
          <div className="w-40"> <Button onClick={()=> {handlePageChange(5)}}>Далее</Button></div>
        }
       
     </div>
    </div>
  );
}

export { Testpage3_4 };
