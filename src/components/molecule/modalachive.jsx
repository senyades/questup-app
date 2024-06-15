import { React, useContext, useState, useEffect } from "react";
import style from '../molecule/fireworks.scss'
import 'animate.css';
import Button from "../buttons/button";
import { InventoryContext } from "../../context/InventoryContext";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import { TestContext } from "../../context/TestsContext";

function Modalachive({text, imgsrc}) {
  const { updateDiamonds, updateExp } = useContext(InventoryContext);
  const { GetUserData } = useContext(AuthContext);
  const { handlePageChange } = useContext(TestContext);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
    {isVisible == true && (
    <div className="absolute z-50 flex items-center justify-center w-full h-full bg-[#00000070] backdrop-blur-sm">
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>

        <div className="modal flex flex-col h-80 p-0 items-center justify-between animate__animated animate__bounceIn">
        <img src={imgsrc} alt="" className="img"/>
        <div className="flex flex-col w-full items-center">
          <span className=" text-2xl font-medium text-center">Поздравляю!</span>
          <span className="w-fill text-base text-gray-400 text-center font-normal">{text}</span>
        </div>
          <div className="w-44">  <Button onClick={() => {setIsVisible(false); }}> Далее </Button> </div>
        </div>
    </div>
  )}
  </>
  );
}

export default Modalachive;
