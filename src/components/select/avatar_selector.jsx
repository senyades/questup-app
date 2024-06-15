import { React, useContext, useState, useEffect } from "react";
import style from '../molecule/avatar.module.scss'
import 'animate.css';
import Button from "../buttons/button";
import { InventoryContext } from "../../context/InventoryContext";
import { NavLink } from "react-router-dom";
import Avatar from "../molecule/avatar";

function AvataSelector() {
  const { GetAvatarId, avatarId, updateAvatarId } = useContext(InventoryContext);
  const [visible, setVisible] = useState(false)


  const UpdateAvatar = (newavatar) => {
    updateAvatarId(newavatar);
    setVisible(false);
    // Вызываем GetAvatarId только после обновления avatarId
  };

  return (
    <>
    <div className="w-20 h-20" style={{ pointerEvents: 'auto', cursor: 'pointer' }} onClick={() => setVisible(true)}><Avatar></Avatar></div>
    {visible == true &&
    <div className="absolute z-40 top-0 left-0 flex items-center justify-center w-full h-full bg-[#00000070] backdrop-blur-sm">
       <div className={`${style.seleccontainer}  animate__animated animate__bounceIn`}>
        <div className={` flex w-full flex-row items-center content-center justify-between`}>
          <span className="text-2xl font-medium text-center">Выбор аватара</span> 
          
          <div className={`${style.close} flex`} onClick={() => setVisible(false)} >

             <svg  xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
              <path d="M7.58398 7.58301L18.4173 18.4163M7.58398 18.4163L18.4173 7.58301" stroke="#7B7F86" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        
          </div>
         
        </div>
        <div className=" flex flex-row gap-6 flex-wrap">
        <div className={`${style.avatar1} ${avatarId===1 ? style.avataractive : style.avatarinactive} w-24 h-24 rounded-xl`} onClick={() => {UpdateAvatar(1)}}> <img src="\vendory\smile.png" alt="" /> </div>
        <div className={`${style.avatar2} ${avatarId===2 ? style.avataractive : style.avatarinactive} w-24 h-24 rounded-xl`} onClick={() => {UpdateAvatar(2)}}> <img src="\vendory\apple.png" alt="" /> </div>
        <div className={`${style.avatar3} ${avatarId===3 ? style.avataractive : style.avatarinactive} w-24 h-24 rounded-xl`} onClick={() => {UpdateAvatar(3)}}> <img src="\vendory\cactus.png" alt="" /> </div>
        <div className={`${style.avatar4} ${avatarId===4 ? style.avataractive : style.avatarinactive} w-24 h-24 rounded-xl`} onClick={() => {UpdateAvatar(4)}}> <img src="\vendory\unicorn-head.png" alt="" /> </div>
        <div className={`${style.avatar5} ${avatarId===5 ? style.avataractive : style.avatarinactive} w-24 h-24 rounded-xl`} onClick={() => {UpdateAvatar(5)}}> <img src="\vendory\boy.png" alt="" /> </div>
        <div className={`${style.avatar6} ${avatarId===6 ? style.avataractive : style.avatarinactive} w-24 h-24 rounded-xl`} onClick={() => {UpdateAvatar(6)}}> <img src="\vendory\girl.png" alt="" /> </div>
        </div>
        </div>
    </div>
    }
    </>
  );
}

export default AvataSelector;
