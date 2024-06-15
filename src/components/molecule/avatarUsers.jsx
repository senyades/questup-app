import { React, useContext, useState, useEffect } from "react";
import style from './avatar.module.scss'
import 'animate.css';
import { InventoryContext } from "../../context/InventoryContext";
import { NavLink } from "react-router-dom";


function AvatarUsers({avatarId}) {

  return (
    <>
    <div className="h-full w-full ">
       {avatarId==1 && <div className={`${style.avatar1} w-full h-full overflow-hidden rounded-xl`}> <img src="\vendory\smile.png" alt="" /> </div>}
       {avatarId==2 && <div className={`${style.avatar2} w-full h-full overflow-hidden rounded-xl`}> <img src="\vendory\apple.png" alt="" /> </div>}
       {avatarId==3 && <div className={`${style.avatar3} w-full h-full overflow-hidden rounded-xl`}> <img src="\vendory\cactus.png" alt="" /> </div>}
       {avatarId==4 && <div className={`${style.avatar4} w-full h-full overflow-hidden rounded-xl`}> <img src="\vendory\unicorn-head.png" alt="" /> </div>}
       {avatarId==5 && <div className={`${style.avatar5} w-full h-full overflow-hidden rounded-xl`}> <img src="\vendory\boy.png" alt="" /> </div>}
       {avatarId==6 && <div className={`${style.avatar6} w-full h-full overflow-hidden rounded-xl`}> <img src="\vendory\girl.png" alt="" /> </div>}
       </div>
  </>
  );
}

export default AvatarUsers;
