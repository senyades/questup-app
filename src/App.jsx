
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import {SignUp} from './pages/adminpages/SignUp'
import {SignIn} from './pages/SignIn'
import {AdminPanel} from './pages/adminpages/AdminPanel'
import {Dashboard} from './pages/userpages/dashboard'
import { Lidearboard } from './pages/userpages/lidearboard';
import { Shop } from './pages/userpages/shop';
import { Achievements } from './pages/userpages/achievements';
import { Tests } from './pages/userpages/tests';
import { Themespage_1 } from './pages/testpage/themespage_1'
import { Levels } from './pages/userpages/levels';
import Modalachive from './components/molecule/modalachive'
import { TestContext } from "./context/TestsContext";

import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { InventoryContext } from "./context/InventoryContext";

import TestPages from './pages/testpage';

function App() {
  const {data, isAppReady, isUserLogged, isTeacher } = useContext(AuthContext);
  
  const {updateAchive} = useContext(InventoryContext)

 
  return (
    <>
     
    <Routes>
      {/* Показывать страницу входа, если пользователь не вошел */}
      {!isUserLogged &&  <Route path="/" element={<SignIn />} />}

      {/* Показывать страницу администратора, если пользователь вошел и является учителем */}
      {isTeacher && isUserLogged && isAppReady  && (
        <Route path="/" element={<AdminPanel />} />
      )}

      {/* Показывать страницу для студента, если пользователь вошел и не является учителем */}
      {isUserLogged && isAppReady && !isTeacher && (
        <>
        <Route path="/" element={<Dashboard />} />
        {/* Добавьте дополнительные маршруты для других страниц дашборда */}
        <Route path="/liderboard" element={<Lidearboard />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/tests/play/1" element={<Themespage_1 testId={1}/>} />
        <Route path="/tests/play/1/testpage" element={<TestPages />} />
        {/* и так далее */}
      </>
        
      )}

      {/* Перенаправить на страницу входа для любых других случаев */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes> </>
  );
}


export {App};
