import { useState } from 'react';
import DefaultTime from './screens/defaultTime';
import Countdown from './screens/countdown';
import { ScreenSwitcher } from './comps/screenSwitcher';
import './App.css'
import UseAnimationFrame from './comps/motion-dev/spinningCube';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<"defaultTime" | "countdown">("defaultTime");

  return (
    <>
    <div className="app-conteiner">
      {activeScreen === "defaultTime" && <DefaultTime />}
      {activeScreen === "countdown" && <Countdown />}
    </div>
    <div>
      <UseAnimationFrame />
      <ScreenSwitcher active={activeScreen} onSwitch={setActiveScreen} />
    </div>
    </>
  )
}

//just want to say that <b>mdn_</b> really did help a tons.

