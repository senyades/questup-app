import React, { useState, useContext, useEffect, useRef } from 'react';
import { Testpage_1 } from "./testpage/testpage1";
import { Testpage_2 } from "./testpage/testpage2";
import { Testpage_3 } from "./testpage/testpage3";
import { Testpage_4 } from "./testpage/testpage4";
import { Testpage_5 } from "./testpage/testpage5";
import { Testpage_5_1 } from "./testpage/testpage5_1";
import { Testpage_6 } from "./testpage/testpage6";
import { Testpage_7 } from "./testpage/testpage7";
import { Testpage_8 } from "./testpage/testpage8";
import { Testpage_9 } from "./testpage/testpage9";
import { TestContext } from "../context/TestsContext";
import { useLocation } from 'react-router-dom';


const TestPages = () => {
  const [fireworksTrue, setFireworksTrue] = useState(false);
  const { currentPage, thisblock, thisthema, newviewTestPage} = useContext(TestContext);

  const location = useLocation();
  const prevLocationRef = useRef(location.pathname);

  useEffect(() => {
   
    newviewTestPage(true);
    
  })


  const pageMap = {
    1: <Testpage_1 />,
    2: <Testpage_2 />,
    3: <Testpage_3 />,
    4: <Testpage_4 />,
    5: <Testpage_5 />,
    6: <Testpage_5_1 />,
    7: <Testpage_6 />,
    8: <Testpage_7 />,
    9: <Testpage_8 />,
    10: <Testpage_9 />,
  };

  return (
    <>
      {thisblock === 1 && thisthema === 1 &&
        pageMap[currentPage]
      }
      {thisblock === 1 && thisthema === 2 &&
         pageMap[currentPage]
      }
      {thisblock === 1 && thisthema === 3 &&
         pageMap[currentPage]
      }
      {thisblock === 2 && thisthema === 1 &&
         pageMap[currentPage]
      }
    </>
  );
};

export default TestPages;
