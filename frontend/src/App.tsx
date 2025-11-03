import { useState } from 'react';
import DefaultTime from './screens/defaultTime';
import Countdown from './screens/countdown';
import { ScreenSwitcher } from './comps/screenSwitcher/screenSwitcher';
import './App.css'




export default function App() {
  const [activeScreen, setActiveScreen] = useState<"defaultTime" | "countdown">("defaultTime");

  return (
    <>
    <div className="screen-container">
      {activeScreen === "defaultTime" && <DefaultTime />}
      {activeScreen === "countdown" && <Countdown />}
    </div>
    <ScreenSwitcher
      screens={["defaultTime", "countdown"]}
      active={activeScreen}
      onSwitch={setActiveScreen}
      className='mainSwitcher'
    /> 
    <div className="pixel-bg" /> {/*OMG, yes its my pixel art, and yes it TOOK HOURS TO DO.*/}
    </>
  )
}

//just want to say that <b>mdn_</b> really did help a tons.

