import { React, useContext, useState, useEffect } from "react";
import Header_Test from '../../components/molecule/header_test';
import Button from "../../components/buttons/button";
import styles from "../testpage/testpage.module.scss";
import { NavLink } from "react-router-dom";
import Firework from '../../components/molecule/fireworks';
import InventoryContext from '../../context/InventoryContext'
import { TestContext } from "../../context/TestsContext";

const Testpage_2 = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [fireworkstrue, setFireworks] = useState(false);
  const [nextpoint, setNextPoint] = useState(null)
 const [inventoryTestData, setInventoryTestData] = useState({
    diamonds: 0,
    exp: 0
  });

  const { test_data, handlePageChange } = useContext(TestContext);

  const [attempts, setAttempts] = useState(1)

  const handleCheck = (option) => {
    setSelectedOption(option);
    setNextPoint(false)
    if (option!="first")
    {
      setAttempts(attempts+1)
    }
    if (option === "first") {
      let newInventoryTestData = { ...inventoryTestData };
      if (attempts === 1) {
        newInventoryTestData.diamonds = 20;
        newInventoryTestData.exp = 100;
      }
      if (attempts === 2) {
        newInventoryTestData.diamonds = 12;
        newInventoryTestData.exp = 80;
      }
      if (attempts === 3) {
        newInventoryTestData.diamonds = 9;
        newInventoryTestData.exp = 60;
      }
      if (attempts === 4) {
        newInventoryTestData.diamonds = 5;
        newInventoryTestData.exp = 30;
      }
      setInventoryTestData(newInventoryTestData);
      setNextPoint(true);
    }
  };


  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
         <Header_Test GoLink={'/tests/play/1'}/>
      <div className="flex w-2/6 flex-col items-center h-full gap-8 justify-center ">
      {fireworkstrue === true && <Firework diamonds={inventoryTestData.diamonds} exp={inventoryTestData.exp} page={3} text={"Вы ответили на вопрос"}/>}
      <p className='font-semibold flex flex-col items-center'>ВОПРОС
      <span className='text-lg text-gray-400 font-normal text-center'>Выберите 1 вариант ответа. За каждую попытку снимается 2 очка</span>
      </p>
        <span className='text-2xl font-semibold text-center'>Что означает понятие "цифровизация"?</span>
        <div className='flex flex-col gap-2'>
        <div className={`${styles.variantblock} ${selectedOption ? styles.check : ''} ${selectedOption === 'first' ? styles.true : ''}`} onClick={() => handleCheck('first')}>Процесс перевода аналоговых данных в цифровой формат</div>
        <div className={`${styles.variantblock}  ${selectedOption ? styles.check : ''}  ${selectedOption === 'second' ? styles.false : ''}`} onClick={() => handleCheck('second')}>Механизм автоматизации процессов в различных сферах жизни</div>
        <div className={`${styles.variantblock} ${selectedOption ? styles.check : ''} ${selectedOption === 'third' ? styles.false : ''}`} onClick={() => handleCheck('third')}>Замена людей на роботов в производстве</div>
        <div className={`${styles.variantblock} ${selectedOption ? styles.check : ''} ${selectedOption === 'fourth' ? styles.false : ''}`} onClick={() => handleCheck('fourth')}>Процесс создания цифровых копий физических объектов, таких как картины или скульптуры</div>
        </div>
      </div>
      {test_data[0][0].thema != 1 &&
      <div className="flex flex-row w-full items-center justify-center p-4 border-t border-gray-200 bg-[#ffffff]">
      <div className="w-40"> <Button onClick={()=> {handlePageChange(3)}}>Далее</Button></div>
    </div>
      }

      {test_data[0][0].thema == 1 &&
      <div className="flex flex-row w-full items-center justify-center p-4 border-t border-gray-200 bg-[#ffffff]">
      {nextpoint === true &&  <div className={`${!selectedOption ? styles.blockbutton : ''} w-40`}> <Button onClick={()=> {setFireworks(true)}}>Далее</Button> </div>}
      {nextpoint === false &&   <div className={`${!selectedOption ? styles.blockbutton : ''} w-48`}> <Button onClick={() => {setSelectedOption(null);setNextPoint(null)}}>Ответить еще раз</Button> </div>}
    </div>
      }


    </div>
  );
};

export  {Testpage_2};
