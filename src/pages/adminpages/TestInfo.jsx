import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { TestContext } from '../../context/TestsContext';
import Button from "../../components/buttons/button";

function TestInfo(userId){
  const [usersData, setUsersData] = useState(null);
  const { handleLogOut, GettestInfo } = useContext(AuthContext);
  const { TestBlocked } = useContext(TestContext);

  const BlockTest =(testId, isBlocked) =>
    {
      TestBlocked({testId, isBlocked})
    }

  return (
    <div className='w-full h-full flex flex-col gap-4 p-4'>
      <div className='flex flex-row bg-white p-4 rounded-xl items-center'>
        <span className='w-full'> Основы цифровой грамотности</span>
        <div className='w-96'>
        <Button onClick={()=>BlockTest(1, true)}>Заблокировать</Button>
        </div>
        <div className='w-96'>
        <Button onClick={()=>BlockTest(1, false)}>Разблокировать</Button>
        </div>
          
      </div>
      <div className='flex flex-row  bg-white p-4 rounded-xl items-center'>
        <span className='w-full'> Облачные технологии</span>
        <div className='w-96'>
        <Button onClick={()=>BlockTest(2, true)}>Заблокировать</Button>
        </div>
        <div className='w-96'>
        <Button onClick={()=>BlockTest(2, false)}>Разблокировать</Button>
        </div>
          
      </div>
      <div className='flex flex-row  bg-white p-4 rounded-xl items-center'>
        <span className='w-full'> Информационная грамотность</span>
        <div className='w-96'>
        <Button onClick={()=>BlockTest(3, true)}>Заблокировать</Button>
        </div>
        <div className='w-96'>
        <Button onClick={()=>BlockTest(3, false)}>Разблокировать</Button>
        </div>
          
      </div>

      <div className='flex flex-row  bg-white p-4 rounded-xl items-center'>
        <span className='w-full'> Создание контента</span>
        <div className='w-96'>
        <Button onClick={()=>BlockTest(4, true)}>Заблокировать</Button>
        </div>
        <div className='w-96'>
        <Button onClick={()=>BlockTest(4, false)}>Разблокировать</Button>
        </div>
          
      </div>

    </div>
  );
}


export {TestInfo};
