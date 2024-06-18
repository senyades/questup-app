import { React, useContext, useState, useEffect } from "react";
import style from '../molecule/fireworks.scss'
import 'animate.css';
import Button from "../buttons/button";
import { InventoryContext } from "../../context/InventoryContext";
import { AuthContext } from "../../context/AuthContext";
import { NavLink } from "react-router-dom";
import { TestContext } from "../../context/TestsContext";

function Firework({diamonds, exp, page, text}) {
  const { updateDiamonds, updateExp } = useContext(InventoryContext);
  const { GetUserData } = useContext(AuthContext);
  const { handlePageChange } = useContext(TestContext);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
    {isVisible == true && (
    <div className="absolute z-40 flex items-center justify-center w-full h-full bg-[#00000070] backdrop-blur-sm">
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>

        <div className="modal flex flex-col h-80 p-0 items-center justify-between animate__animated animate__bounceIn">
        <img src='/vendory/diamond.png' alt="" className="img2"/>
        <div className="flex flex-col w-full items-center">
          <span className=" text-2xl font-medium text-center">Молодец! </span>
          <span className="w-fill text-base text-gray-400 text-center font-normal">{text}</span>
        </div>
        <div className="flex flex-row gap-2">
                        <div className="flex flex-row items-center gap-1 py-2 px-4 bg-slate-50 rounded-full  border border-gray-200	 font-medium text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_509_118)">
                            <circle cx="8" cy="8" r="8" fill="#439DD7"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_509_118">
                              <rect width="16" height="16" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                          +{diamonds}
                          </div>
                        <div className="flex flex-row items-center content-center justify-center gap-1 py-2 px-4 bg-slate-50 rounded-full  border border-gray-200	 font-medium text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M13.3656 7.84082L6.36559 15.3408C6.29141 15.42 6.19349 15.4729 6.08661 15.4915C5.97974 15.5101 5.8697 15.4935 5.7731 15.4441C5.67651 15.3947 5.5986 15.3153 5.55113 15.2177C5.50366 15.1201 5.48921 15.0098 5.50996 14.9033L6.42621 10.3202L2.82434 8.96769C2.74698 8.93876 2.678 8.89111 2.62355 8.82901C2.5691 8.76691 2.53089 8.69229 2.51232 8.61181C2.49374 8.53134 2.4954 8.44751 2.51713 8.36783C2.53886 8.28815 2.57998 8.2151 2.63684 8.15519L9.63684 0.655191C9.71102 0.576025 9.80893 0.523135 9.91581 0.504501C10.0227 0.485867 10.1327 0.502501 10.2293 0.551892C10.3259 0.601282 10.4038 0.680751 10.4513 0.778304C10.4988 0.875858 10.5132 0.986204 10.4925 1.09269L9.57371 5.68082L13.1756 7.03144C13.2524 7.06057 13.3208 7.10816 13.3748 7.17002C13.4288 7.23187 13.4668 7.30608 13.4853 7.38609C13.5039 7.4661 13.5024 7.54943 13.4811 7.62874C13.4598 7.70805 13.4192 7.78089 13.3631 7.84082H13.3656Z" fill="#FFC225"/>
                        </svg>
                          +{exp}
                          </div>
          </div>
          {page != 0 && (<div className="w-44">  <Button onClick={() => { 
          updateDiamonds({diamonds}); 
          updateExp({exp}); 
          setIsVisible(false); 
          GetUserData(); 
          handlePageChange(page);
        }}>Далее</Button> </div>)}
        {page==0 && (<NavLink to="/tests" className="w-44">  <Button onClick={() => { 
          updateDiamonds({diamonds}); 
          updateExp({exp}); 
          setIsVisible(false); 
          GetUserData(); 
          handlePageChange(page);
        }}>Завершить тест</Button> </NavLink>)}
        </div>
    </div>
  )}
  </>
  );
}

export default Firework;
