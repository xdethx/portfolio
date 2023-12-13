import React, { useEffect } from "react";

import Home from "./Home";
import CELLS from 'vanta/src/vanta.cells'
function App() {

  useEffect(()=>{
 CELLS({
 el:'#vanta',
 mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  color1: 0x0,
  color2: 0xff0000,
  size: 1.30,
  speed: 0.80
 })

  },[])
  return (
    <div className="w-full lgl:h-screen font-bodyfont overflow-hidden text-textColor bg-black relative">
      <div className="max-w-screen-2xl h-full mx-auto flex justify-center items-center">
        <Home />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10" id="vanta" >
      
      </div>
    </div>
  );
}

export default App;
