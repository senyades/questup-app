import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import { InventoryContext } from "../../context/InventoryContext";
import { AuthContext } from "../../context/AuthContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';
import { useSnackbar } from 'notistack'; // Import useSnackbar from notistack

function Testpage_9() {
  const { test_data, updateTheme, handlePageChange} = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);
  const { achivList, GetAchivList, updateAchive } = useContext(InventoryContext);
  const { data } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();

  
  const checkAchive = async () => {
    await GetAchivList();

    // Проверка наличия данных в data и achivList
    if (data && data.inventory && Array.isArray(achivList) && achivList.length > 0) {
        console.log("Diamonds: ", data.inventory.diamonds); // Логируем значение

        if (Array.isArray(achivList[0]) && achivList[0].length > 0) {
            console.log("Achievement Status: ", achivList[0][0].got); // Логируем состояние достижения

            if (data.inventory.diamonds+14 > 100 && !achivList[0][0].got) {
                updateAchive(1, true);
                enqueueSnackbar("Вы получили достижение САМЫЙ БОГАТЫЙ ", { variant: 'success' });

            }
        } else {
            console.error("achivList[0] is undefined or empty.");
        }

        if (Array.isArray(achivList[0]) && achivList[0].length > 1) {
            if (!achivList[0][1].got) {
                updateAchive(2, true);
                enqueueSnackbar("Вы получили достижение НАЧАЛО ПОЛОЖЕНО", { variant: 'success' });
            }
        } else {
            console.error("achivList[0][1] is undefined.");
        }
    } else {
        console.error("Data or AchivList is undefined or empty.");
    }
};



  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests/play/1'}/>
      <div className="flex w-full overflow-y-auto flex-col items-center h-full  gap-8 justify-center ">
      {fireworkstrue === true && <Firework diamonds={14} exp={45} page={0}/>}
            
          <div className="flex flex-col h-full items-center">
            <div className="py-10 flex flex-col items-center gap-4">
          <div className={`${styles.infoblock} text-lg text-gray-400 flex flex-col gap-2`}> 
          <p className="flex flex-col gap-2">
            <span className="text-xl text-black w-full font-semibold uppercase">Выводы</span>
            <span>Цифровая грамотность способствует успешному обучению: начиная от работы с информацией до создания собственного контента.
Дисциплина "Цифровая грамотность" поможет вам освоить ключевые навыки будущего для профессионального развития и повышения качества жизни в цифровом мире.
</span>
          </p>
          </div>
          <img src="\vendory\Slide4.png" alt="" className={`${styles.img2}`} />
          </div>
      </div>

          </div>
          


     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 1 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true); checkAchive()}}>Завершить</Button></div>
        }
        
        {test_data[0][0].thema != 1 &&
          <NavLink to={"/tests/play/1"} className="w-40"> <Button to={"/tests/play/1"} onClick={()=> {handlePageChange(0); checkAchive()}}>Завершить</Button></NavLink>
        }
     </div>
    </div>
  );
}

export { Testpage_9 };
