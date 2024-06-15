import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';

function Testpage_5() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);

  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
       <Header_Test GoLink={'/tests/play/1'}/>
      <div className="flex  flex-row items-center h-full  gap-8 justify-center ">
      {fireworkstrue === true && <Firework diamonds={5} exp={25} page={6}/>}
            <img src="\vendory\Slide1.png" alt="" className={`${styles.img2}`} />
      </div>
     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 1 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Далее</Button></div>
        }
        
        {test_data[0][0].thema != 1 &&
          <div className="w-40"> <Button onClick={()=> {handlePageChange(6)}}>Далее</Button></div>
        }
     </div>
    </div>
  );
}

export { Testpage_5 };
