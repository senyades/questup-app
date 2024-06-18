import React, { useState, useEffect, useContext} from 'react';
import Header_Test from '../../components/molecule/header_test';
import Button from "../../components/buttons/button";
import styles from "../testpage/testpage.module.scss";
import { NavLink } from "react-router-dom";
import Firework from '../../components/molecule/fireworks';
import InventoryContext from '../../context/InventoryContext'
import { useHistory } from 'react-router-dom';
import { TestContext } from "../../context/TestsContext";

const Test2page7 = () => {

  const { test_data, handlePageChange, TestView } = useContext(TestContext);

    useEffect(() => {
        return () => {
          if (window.history.state && window.history.state.fromBack) {
            console.log("Back button clicked!");
            // Perform your action here
          }
        };
      }, []);

  const [fireworkstrue, setFireworks] = useState(false);
  const [nextpoint, setNextPoint] = useState(null)
  const [truepoint, setTruePoint] = useState(null)

  const [selectedFirst, setSelectedFirst] = useState(false);
  const [selectedSecond, setSelectedSecond] = useState(false);
  const [selectedThird, setSelectedThird] = useState(false);
  const [selectedFourth, setSelectedFourth] = useState(false);
  const [selectedFive, setSelectedFive] = useState(false);
  const [selectedSix, setSelectedSix] = useState(false);
  const [selectedSeven, setSelectedSeven] = useState(false);

 const [inventoryTestData, setInventoryTestData] = useState({
    diamonds: 0,
    exp: 0
  });

  const [attempts, setAttempts] = useState(1)
  const [right, setRight] = useState(0)

  const handleCheck = (option) => {

    if (option=="third" || option=="first" || option=="second" )
    {
      setRight(right+1)
      setAttempts(attempts+1)
    }
    else
    {
      setAttempts(attempts+1)
    }

    if(attempts===3)
      {
        setNextPoint(false);
      }

  };

  const CheckAnswer = () => {
   
      let newInventoryTestData = { ...inventoryTestData };

      if (right === 0) {
        newInventoryTestData.diamonds = 5;
        newInventoryTestData.exp = 30;
      }
      if (right === 1) {
        newInventoryTestData.diamonds = 15;
        newInventoryTestData.exp = 50;
      }
      if (right === 2) {
        newInventoryTestData.diamonds = 16;
        newInventoryTestData.exp = 60;
      }
      if (right === 3) {
        newInventoryTestData.diamonds = 28;
        newInventoryTestData.exp = 80;
      }
      if (right === 4) {
        newInventoryTestData.diamonds = 40;
        newInventoryTestData.exp = 100;
      }
      setInventoryTestData(newInventoryTestData);
      setNextPoint(true);
  };


  const TestViewUpdate = (testId, isView) =>
    {
     TestView({testId, isView})
    }

  return (
    <div className="flex flex-col h-full w-full items-center bg-[#f9fafb]">
      <Header_Test GoLink={'/tests/play/2'}/>
      <div className="flex w-full flex-col items-center h-full overflow-y-scroll gap-8 justify-center ">

      {fireworkstrue === true && <Firework diamonds={inventoryTestData.diamonds} exp={inventoryTestData.exp} page={0} text={"Вы ответили на тест"}/>}

      <div className="flex flex-col h-full items-center w-full">
        <div className='flex flex-col items-center gap-8 py-10'>

        <p className='font-semibold flex flex-col items-center'>ВОПРОС
      <span className='text-lg text-gray-400 font-normal'>Выберите варианты ответа. За каждый неверный ответ снимаются баллы</span>
      </p>
            <span className='text-2xl font-semibold'>Какие недостатки может иметь Google Диск?</span>
            <div className='flex flex-col gap-2'>
            <div className={`${styles.variantblock}  ${nextpoint === false ? styles.check : ''} ${selectedFirst==true && !truepoint ? styles.checkVar : ''} ${truepoint ? styles.true : ''}`} onClick={() => {handleCheck('first'); setSelectedFirst(true)}}>Риск потери данных при сбоях в работе сервиса</div>
            <div className={`${styles.variantblock}  ${nextpoint === false ? styles.check : ''} ${selectedSecond==true && !truepoint ? styles.checkVar : ''} ${truepoint ? styles.true : ''}`} onClick={() => {handleCheck('second'); setSelectedSecond(true)}}>Ограниченный объем бесплатного хранилища</div>
            <div className={`${styles.variantblock} ${nextpoint === false ? styles.check : ''} ${selectedThird==true && !truepoint ? styles.checkVar : ''} ${truepoint ? styles.true : ''}`} onClick={() => {handleCheck('third'); setSelectedThird(true)}}>Необходимость постоянного подключения к Интернету</div>
          </div>
          </div>

        </div>
    

      </div>

      {test_data[0][1].thema == 1 &&
      <div className="flex flex-row w-full items-center justify-center p-4 border-t border-gray-200 bg-[#ffffff]">
      {nextpoint === true &&  <div className={` w-40`}> <Button onClick={()=> {setFireworks(true)}}>Далее</Button> </div>}
      {nextpoint === false &&   <div className={` w-48`}> <Button onClick={() => {CheckAnswer();setTruePoint(true);TestViewUpdate(2, true)}}>Ответить</Button> </div>}
    </div>
      }
        {test_data[0][1].thema != 1 &&
      <div className="flex flex-row w-full items-center justify-center p-4 border-t border-gray-200 bg-[#ffffff]">
    <NavLink to={"/tests/play/2"} className="w-40"> <Button onClick={()=> {handlePageChange(0);}}>Завершить</Button></NavLink>
    </div>
      }
    </div>
  );
};

export  {Test2page7};
