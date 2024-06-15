import { React, useContext, useEffect, useState } from "react";
import Navbar from '../../components/molecule/navbar';
import Header from '../../components/molecule/header';
import Button from "../../components/buttons/button";
import ButtonGray from "../../components/buttons/button_gray";
import { AuthContext } from "../../context/AuthContext";
import { TestContext } from "../../context/TestsContext";
import style from "./dashboard.module.scss"
import { NavLink } from "react-router-dom";
import Avatar from "../../components/molecule/avatar";
import AvataSelector from "../../components/select/avatar_selector";
import { InventoryContext } from "../../context/InventoryContext"


function Dashboard() {
  const { data, GetUserData } = useContext(AuthContext);
  const { quantity_test, GetQuantityTest } = useContext(TestContext);
  const { GetAvatarId, avatarId, updateAvatarId } = useContext(InventoryContext);

  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    GetQuantityTest();
    GetUserData();
  }, []);

  return (
    
    <div className="flex flex-col relative h-full bg-[#f9fafb]">
       <Header />
       <div className="flex flex-row w-full h-full  overflow-hidden">
       <Navbar />
       
        <div className="w-full h-full flex flex-col pt-10 items-center  overscroll-y-contain">
          <div className={`${style.maincontainer}`}>

            <div className="w-full flex flex-row gap-4" >
              
              <div className={`${style.substrate} flex flex-col h-80 w-full items-center justify-between`} >
                <div className="flex flex-col gap-2 items-center">
                <AvataSelector></AvataSelector>
                <span className=" text-2xl font-medium text-center">Привет {data.user.name}</span>
                <span className="w-4/5 text-base text-gray-400 text-center font-normal">Проходи тесты и зарабатывай дополнительные баллы по дисциплине</span>
                </div>
               

                <NavLink to={'/tests'} className="w-full">
                <ButtonGray>Список заданий</ButtonGray>
                </NavLink>
                
                </div>
                <div className={`${style.substrate} flex flex-col gap-2 h-80 w-full items-center justify-between `} >

                  <div className="flex w-full flex-col items-center gap-2">
                  {data.inventory.exp<600 && 
                        <div className="w-20 h-20">
                        <img src="\vendory\star-with-smile.png"/>
                      </div>
                    }
                    {data.inventory.exp<1200 && data.inventory.exp>600 &&
                        <div className="w-20 h-20">
                        <img src="\vendory\bakalavr.png"/>
                      </div>
                    }
                     {data.inventory.exp<2000 && data.inventory.exp>1200 &&
                        <div className="w-20 h-20">
                        <img src="\vendory\magistr.png"/>
                      </div>
                    }
                     {data.inventory.exp<2500 && data.inventory.exp>2000 &&
                        <div className="w-20 h-20">
                        <img src="\vendory\aspirant.png"/>
                      </div>
                    }
                      <div className="flex flex-col w-full items-center">
                        <span className="w-4/5 text-base text-gray-400 text-center font-normal">Твой уровень</span>
                        <span className=" text-2xl font-medium text-center">Новичок</span>
                      </div>
                  </div>
               
                <NavLink to={'/levels'} className="w-full">
                <ButtonGray>Подробнее</ButtonGray>
                </NavLink>
                </div>
           </div>

            <div className="w-full flex flex-row gap-4">
              <div className={`${style.substrate} flex flex-col gap-2  w-8/12  items-center`}><span className="text-2xl font-medium text-center">{quantity_test}</span><span className="text-base text-gray-400 text-center font-normal">Пройденных тестов</span></div>
              <div className={`${style.substrate} flex flex-col gap-2 w-8/12`}><span className="text-2xl font-medium text-center">{data.inventory.diamonds}</span> <span className="text-base text-gray-400 text-center font-normal"> Валюты заработано</span></div>
            </div>

            <div className={`${style.banner} flex flex-col gap-4 w-full items-center content-center justify-center relative overflow-hidden`}>
              
              <img src='\vendory\lightning (1) 1.png' className={`${style.img1}`}/>
              <span className="text-2xl font-medium">{data.inventory.score} баллов</span>
              <span className="w-1/2 text-base font-normal text-gray-400 text-center">Обменивай валюту <br />на дополнительные баллы в магазине </span>
               <div className="w-32">
                <NavLink to={'/shop'} className="w-full">
                <Button>Обменять</Button>
                </NavLink>
              
               </div>
               <img src='/vendory/diamond.png' alt="" className={`${style.img2}`}/>
            </div>

          </div>
        </div> 
       </div>
       
    </div>

  );
}



export {Dashboard};
