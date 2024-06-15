import { React, useContext, useState, useEffect } from "react";
import Navbar from '../../components/molecule/navbar';
import Header from '../../components/molecule/header';
import Button from "../../components/buttons/button";
import { AuthContext } from "../../context/AuthContext";
import { InventoryContext } from "../../context/InventoryContext";
import style from "./shop.module.scss"
import { useSnackbar } from 'notistack'; // Import useSnackbar from notistack

function Shop() {
  const { enqueueSnackbar } = useSnackbar();
  const [inputValue, setInputValue] = useState("");
  const [score, setPoints] = useState(0); // Состояние для хранения количества баллов
  const { data, GetUserData } = useContext(AuthContext);
  const { updateScore, updateDiamonds } = useContext(InventoryContext);

  const [btnView, setBtnView] = useState(false)

  let inventory_test_data = {
    newdiamonds: 0,
    exp: 0
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Проверяем, что введены только цифры
    if (/^\d*$/.test(value) || value === "") {
      setInputValue(value);
      // Рассчитываем количество баллов на основе введенной суммы валюты
      if (value === "" || parseInt(value) === 0) {
        setPoints(0);
        setBtnView(false)
      } else {
        const currencyValue = parseInt(value);
        const calculatedPoints = Math.floor(currencyValue / 150); // 1 балл = 150 валюты
        setPoints(calculatedPoints);
        setBtnView(true)
      }
    }
  };

  const BuyScore = () => {
    if (score < 1) {
      enqueueSnackbar("Валюты не может быть меньше 150", { variant: 'error' });
    } else {
      if(data.inventory.diamonds < score * 150)
        {
          enqueueSnackbar("Недостаточно средств", { variant: 'error' });
        }
        else{
          const diamonds = -score * 150;
      console.log(diamonds);
      updateDiamonds({diamonds});
      console.log("отправляет", score)
      updateScore({score});
      enqueueSnackbar("Вы получили баллы", { variant: 'success' });
      GetUserData();

        }
      
      
    }
  }
  
  return (
    <div className="flex flex-col h-full bg-[#f9fafb]">
       <Header/>
       <div className="flex flex-row w-full h-full">
       <Navbar />
       <div className="w-full flex flex-col h-full justify-start content-center items-center p-10 gap-4">
        <div className="gap-4 flex flex-col items-center">
        <div className={`${style.block} gap-2`}>
         
          <p className=" text-2xl font-medium text-center">Магазин</p>
          <p className="text-base w-1/2 text-gray-400 text-center font-normal">Здесь вы можете обменивать валюту на реальные баллы по дисциплине</p>
         </div>
         <p className="w-48 flex flex-row justify-center bg-[#ffffff] border border-gray-200 rounded-lg p-2"> 1 балл =  150
         <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
          <circle cx="11" cy="11" r="9" fill="#439DD7"/>
        </svg>
         </p>
         <div className={`${style.mainblock} gap-2`}>
            <p className="text-base w-1/2 text-gray-400 text-start font-normal">Вы заплатите</p>
            <div className="w-full">
              <input 
                type="text" 
                placeholder="0" 
                className={`${style.inputstyle} text-4xl font-medium text-start text-black`}
                value={inputValue}
                onChange={handleInputChange}
              /> 
            </div>
         </div>
         <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 72 72" fill="none">
  <path d="M27 9L15 21L24 21L24 42L30 42L30 21L39 21M33 51L45 63L57 51L48 51L48 30L42 30L42 51L33 51Z" fill="black"/>
</svg>
         <div className={`${style.mainblock} gap-2`}>
            <p className="text-base w-1/2 text-gray-400 text-start font-normal">Вы получите</p>
            <div className="w-full flex flex-row justify-between items-center">
              <div className={`${style.inputstyle} text-4xl font-medium text-start text-black`}>
                {score} {/* Вывод количества баллов */}
              </div> 
              <p className="text-2xl font-medium text-start text-black">Баллов
              </p>
            </div>
         </div>
        </div>
        
        {btnView == true &&  <div className="w-64"><Button onClick={() => {BuyScore() }}>Обменять</Button></div>}
       
        
       </div>
     
       </div>
    </div>
  );
}

export {Shop};
