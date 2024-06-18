import { React, useContext, useState, useEffect } from "react";
import { TestContext } from "../../context/TestsContext";
import Header_Test from '../../components/molecule/header_test';
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styles from "../testpage/testpage.module.scss";
import Button from "../../components/buttons/button";
import Firework from '../../components/molecule/fireworks';
import { useLocation } from 'react-router-dom';

function Testpage2_10() {
  const { test_data, handlePageChange } = useContext(TestContext);
  const [fireworkstrue, setFireworks] = useState(false);


  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests/play/1'}/>
      <div className="flex w-2/6 flex-row items-center h-full  gap-8 justify-center ">
      {fireworkstrue === true && <Firework diamonds={5} exp={50} page={0} text={"Ты прошел задание"}/>}
          <div className="flex flex-col gap-4 content-center items-center"> 
          <p>
            <span className="text-xl text-black w-full font-semibold"> Задание для самоконтроля</span>
          </p>

          <iframe src="https://wordwall.net/ru/embed/38c7c0ffb18b4302a901f58819552447?themeId=1&templateId=5&fontStackId=0" width="500" height="380" frameborder="0" allowfullscreen></iframe>

         


          </div>
   
      </div>
     <div className="flex flex-row w-full items-center justify-center p-4  border-t border-gray-200 bg-[#ffffff]">
     {test_data[0][0].thema == 2 &&
          <div className="w-40"> <Button onClick={()=> {setFireworks(true)}}>Завершить</Button></div>
        }
        
        {test_data[0][0].thema != 2 &&
         <NavLink to={"/tests/play/1"} className="w-40"> <Button to={"/tests/play/1"} onClick={()=> {handlePageChange(0);}}>Завершить</Button></NavLink>
        }
       
     </div>
    </div>
  );
}

export { Testpage2_10 };
