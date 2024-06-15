import { React, useContext, useState, useEffect } from "react";
import Navbar from '../../components/molecule/navbar';
import Header from '../../components/molecule/header';
import Button from "../../components/buttons/button";
import { AuthContext } from "../../context/AuthContext";
import style from "./dashboard.module.scss"

import ProgressBar from "../../components/molecule/progressbar"

function Levels() {
  const {data, GetUserData} = useContext(AuthContext);
  
  return (
    <div className="flex flex-col h-full bg-[#f9fafb]">
       <Header/>
       <div className="flex flex-row w-full h-full">
       <Navbar />
        <div className="flex flex-col items-center w-full">
        <div className={`${style.maincontainer} py-10`}>
          <div className="flex flex-wrap gap-4 w-full">
            <div className={`${style.levelblock} w-full`}>
              
              {data.inventory.exp<600 && 
              <div className="lvl1 w-full">
              <div className="flex flex-col justify-center items-center content-center gap-4">
                <img src="\vendory\star-with-smile.png" className="w-20 h-20"/>
                <p className="text-2xl font-medium">Новичок</p>
              </div>
              <ProgressBar start={data.inventory.exp} end={600} />
              </div>
              }

              {data.inventory.exp<1200 && data.inventory.exp>600 &&
                  <div className="lvl1 w-full">
                  <div className="flex flex-col justify-center items-center content-center gap-4">
                    <img src="\vendory\bakalavr.png" className="w-20 h-20"/>
                    <p className="text-2xl font-medium">Бакалавр</p>
                  </div>
                  <ProgressBar start={data.inventory.exp} end={1200} />
                  </div>
              }

              {data.inventory.exp<2000 && data.inventory.exp>1200 &&
                  <div className="lvl1 w-full">
                  <div className="flex flex-col justify-center items-center content-center gap-4">
                    <img src="\vendory\magistr.png" className="w-20 h-20"/>
                    <p className="text-2xl font-medium">Магистр</p>
                  </div>
                  <ProgressBar start={data.inventory.exp} end={1200} />
                  </div>
              }

                {data.inventory.exp<2500 && data.inventory.exp>2000 &&
                  <div className="lvl1 w-full">
                  <div className="flex flex-col justify-center items-center content-center gap-4">
                    <img src="\vendory\aspirant.png" className="w-20 h-20"/>
                    <p className="text-2xl font-medium">Аспирант</p>
                  </div>
                  <ProgressBar start={data.inventory.exp} end={1200} />
                  </div>
              }



              
            </div>
          </div>

          <div className="flex flex-row w-full justify-between pt-10 gap-4">
            <div className={`${style.levelblock2} w-full`}>
              <img src="\vendory\star-with-smile.png" className="w-20 h-20"/>
              <p className="text-xl font-normal">Новичок</p>
            </div>

            <div className={`${style.levelblock2} w-full`}>
            <img src="\vendory\bakalavr.png" className="w-20 h-20"/>
              <p className="text-xl font-normal">Бакалавр</p>
            </div>

            <div className={`${style.levelblock2} w-full`}>
            <img src="\vendory\magistr.png" className="w-20 h-20"/>
              <p className="text-xl font-normal">Магистр</p>
            </div>

            <div className={`${style.levelblock2} w-full`}>
            <img src="\vendory\aspirant.png" className="w-20 h-20"/>
              <p className="text-xl font-normal">Аспирант</p>
            </div>
          </div>

        </div>
        </div>
       </div>
     
     
    </div>

  );
}

export {Levels};
