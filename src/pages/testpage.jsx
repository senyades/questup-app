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

import { Testpage2_1 } from "./testpage2/testpage2_1";
import { Testpage2_2 } from "./testpage2/testpage2_2";
import { Testpage2_3 } from "./testpage2/testpage2_3";
import { Testpage2_4 } from "./testpage2/testpage2_4";
import { Testpage2_5 } from "./testpage2/testpage2_5";
import { Testpage2_6 } from "./testpage2/testpage2_6";
import { Testpage2_7 } from "./testpage2/testpage2_7";
import { Testpage2_8 } from "./testpage2/testpage2_8";
import { Testpage2_9 } from "./testpage2/testpage2_9";
import { Testpage2_10 } from "./testpage2/testpage2_10";


import { Testpage3_1 } from "./testpage3/testpage3_1";
import { Testpage3_2 } from "./testpage3/testpage3_2";
import { Testpage3_3 } from "./testpage3/testpage3_3";
import { Testpage3_4 } from "./testpage3/testpage3_4";
import { Testpage3_5 } from "./testpage3/testpage3_5";
import { Testpage3_6 } from "./testpage3/testpage3_6";
import { Testpage3_7 } from "./testpage3/testpage3_7";
import { Testpage3_8 } from "./testpage3/testpage3_8";
//thema2


//второй тест первая тема
import { Test2page1 } from "./test2/test2page1";
import { Test2page2 } from "./test2/test2page2";
import { Test2page3 } from "./test2/test2page3";
import { Test2page4 } from "./test2/test2page4";
import { Test2page5 } from "./test2/test2page5";
import { Test2page6 } from "./test2/test2page6";
import { Test2page7 } from "./test2/test2page7";

import { Test5page1 } from "./test5/test5page1";
import { Test5page2 } from "./test5/test5page2";
import { Test5page3 } from "./test5/test5page3";

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

  const pageMap_thema2 = {
    1: <Testpage2_1 />,
    2: <Testpage2_2 />,
    3: <Testpage2_3 />,
    4: <Testpage2_4 />,
    5: <Testpage2_5 />,
    6: <Testpage2_6 />,
    7: <Testpage2_7 />,
    8: <Testpage2_8 />,
    9: <Testpage2_9 />,
    10: <Testpage2_10/>,
  };

  const pageMap_thema3 = {
    1: <Testpage3_1 />,
    2: <Testpage3_2 />,
    3: <Testpage3_3 />,
    4: <Testpage3_4 />,
    5: <Testpage3_5 />,
    6: <Testpage3_6 />,
    7: <Testpage3_7 />,
    8: <Testpage3_8 />,
  };

  const pageMap2 = {
    1: <Test2page1 />,
    2: <Test2page2 />,
    3: <Test2page3 />,
    4: <Test2page4 />,
    5: <Test2page5 />,
    6: <Test2page6 />,
    7: <Test2page7 />,
  };

  const pageMap5 = {
    1: <Test5page1 />,
    2: <Test5page2 />,
    3: <Test5page3 />,
  };

  return (
    <>
      {thisblock === 1 && thisthema === 1 &&
        pageMap[currentPage]
      }
      {thisblock === 1 && thisthema === 2 &&
         pageMap_thema2[currentPage]
      }
      {thisblock === 1 && thisthema === 3 &&
         pageMap_thema3[currentPage]
      }
       {thisblock === 2 && thisthema === 1 &&
         pageMap2[currentPage]
      }
       {thisblock === 5 && thisthema === 1 &&
         pageMap5[currentPage]
      }
    </>
  );
};

export default TestPages;
