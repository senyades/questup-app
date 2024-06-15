import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Button from "../../components/buttons/button";
import { TestInfo } from './TestInfo';
import {SignUp} from './SignUp'

function AdminPanel(){
  const [usersData, setUsersData] = useState(null);
  const {data, handleLogOut, fetchUsers, deleteUser, fetchData } = useContext(AuthContext);
  const [testPage, setTestPage] = useState(false);
  const [UserPage, setUserPage] = useState(true);
  const [NewUserPage, setNewUserPage] = useState(false);

  useEffect(() => {
    // Получение данных пользователей при загрузке компонента
    fetchUsers()
  }, []);

  const deleteUserBd = (userId) =>
  {
    console.log(userId)
    deleteUser({userId});
    fetchUsers()
  }

  return (
    <div className='h-full flex flex-col gap-4 bg-gray-100'>
      <header className='w-full flex justify-end p-4 bg-[#ffffff] text-black font-medium content-center items-center gap-4'>{data.user.name} 
        <div className="bg-[#f9fafb] rounded-xl size-12 min-w-12 flex justify-center items-center hover:bg-gray-100" onClick={handleLogOut}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path d="M10.5 20.75C10.5 20.9489 10.421 21.1397 10.2803 21.2803C10.1397 21.421 9.94891 21.5 9.75 21.5H4.5C4.10218 21.5 3.72064 21.342 3.43934 21.0607C3.15804 20.7794 3 20.3978 3 20V5C3 4.60218 3.15804 4.22064 3.43934 3.93934C3.72064 3.65804 4.10218 3.5 4.5 3.5H9.75C9.94891 3.5 10.1397 3.57902 10.2803 3.71967C10.421 3.86032 10.5 4.05109 10.5 4.25C10.5 4.44891 10.421 4.63968 10.2803 4.78033C10.1397 4.92098 9.94891 5 9.75 5H4.5V20H9.75C9.94891 20 10.1397 20.079 10.2803 20.2197C10.421 20.3603 10.5 20.5511 10.5 20.75ZM20.7806 11.9694L17.0306 8.21937C16.9257 8.11437 16.792 8.04284 16.6465 8.01385C16.5009 7.98487 16.35 7.99972 16.2129 8.05653C16.0758 8.11335 15.9586 8.20957 15.8762 8.33301C15.7938 8.45646 15.7499 8.60158 15.75 8.75V11.75H9.75C9.55109 11.75 9.36032 11.829 9.21967 11.9697C9.07902 12.1103 9 12.3011 9 12.5C9 12.6989 9.07902 12.8897 9.21967 13.0303C9.36032 13.171 9.55109 13.25 9.75 13.25H15.75V16.25C15.7499 16.3984 15.7938 16.5435 15.8762 16.667C15.9586 16.7904 16.0758 16.8867 16.2129 16.9435C16.35 17.0003 16.5009 17.0151 16.6465 16.9861C16.792 16.9572 16.9257 16.8856 17.0306 16.7806L20.7806 13.0306C20.8504 12.961 20.9057 12.8783 20.9434 12.7872C20.9812 12.6962 21.0006 12.5986 21.0006 12.5C21.0006 12.4014 20.9812 12.3038 20.9434 12.2128C20.9057 12.1217 20.8504 12.039 20.7806 11.9694Z" fill="#7B7F86"/>
        </svg>
        </div>
      </header>
      <div className='flex flex-row gap-4 p-4 pb-0 rounded-xl bg-white m-4'>
        {testPage == true && 
        <div className='flex flex-row gap-4'>
           <div className='flex p-2 text-gray-500 hover:text-black cursor-pointer' onClick={()=>{setUserPage(true);setTestPage(false) }}>Пользователи</div>
          <div className='flex p-2 border-b-2 border-blue-500 cursor-pointer'  onClick={()=>{setUserPage(false);setTestPage(true) }}>Тесты</div>
        </div>
         
        }

      {UserPage == true && 
              <div className='flex flex-row gap-4'>
                <div className='flex p-2 border-b-2 border-blue-500  cursor-pointer' onClick={()=>{setUserPage(true);setTestPage(false) }}>Пользователи</div>
                <div className='flex p-2  cursor-pointer hover:text-black'  onClick={()=>{setUserPage(false);setTestPage(true) }}>Тесты</div>
              </div>
              
              }


      </div>
      {UserPage==true && 
    <div className='p-4 flex flex-col'>
      <div className='flex flex-row w-fill justify-between mb-6 items-center '>
      <h1 className='text-black font-medium text-2xl'>Таблица пользователей</h1>
      <SignUp></SignUp>
      
      </div>
      
      {fetchData ? (
  <table className="flex flex-col rounded-lg overflow-hidden shadow-md">
  <thead className=' w-full flex flex-row border-b-2 border-gray-200'>
    <tr className='w-full flex'>
      <th className='w-full flex p-4 bg-gray-50'>Имя</th>
      <th className='w-full flex p-4 bg-gray-50'>Фамилия</th>
      <th className='w-full flex p-4 bg-gray-50'>Логин</th>
      <th className='w-full flex p-4 bg-gray-50'>Пароль</th>
      <th className='w-full flex p-4 bg-gray-50'>Учитель</th>
      <th className='w-full flex p-4 bg-gray-50'>Валюта</th>
      <th className='w-full flex p-4 bg-gray-50'>Опыт</th>
      <th className='w-full flex p-4 bg-gray-50'>Баллов</th>
      <th className='w-full flex p-4 bg-gray-50'>Удалить</th>
    </tr>
  </thead>
  <tbody className='flex w-full flex-col'> 
    {fetchData.map((user) => (
      <tr key={user.id} className='w-full flex bg-[#ffffff] border-b-2 border-gray-50'>
        <td className='w-full flex p-4'>{user.name}</td>
        <td className='w-full flex p-4'>{user.surname}</td>
        <td className='w-full flex p-4'>{user.login}</td>
        <td className='w-full flex p-4'>{user.password}</td>
        <td className='w-full flex p-4'>{user.teacher ? 'Да' : 'Нет'}</td>
        <td className='w-full flex p-4'>{user.diamonds}</td>
        <td className='w-full flex p-4'>{user.exp}</td>
        <td className='w-full flex p-4'>{user.score}</td>
        <td className='w-full flex p-4'><Button onClick={() => deleteUserBd(user.id)}>Удалить</Button></td>
      </tr>
    ))}
  </tbody>
</table>
) : (
  <div>Loading...</div>
)}



    </div>
    }
    {testPage==true && <TestInfo></TestInfo>
    
    }
    </div>
  );
}


export {AdminPanel};
