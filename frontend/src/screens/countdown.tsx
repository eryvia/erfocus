import { useEffect, useState } from "react";
import { CountdownFormatSelector } from "../comps/countdownFormatSelector";
import { ScreenSwitcher } from "../comps/screenSwitcher/screenSwitcher";
import SetCountdownInput from "../comps/setCountdownInput/setCountdownInput";

function convertSeconds(totalSeconds: number) {
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [activeScreen, setActiveScreen] = useState<"setCountdown" | "countdown">("setCountdown");
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [selected, setSelected] = useState<string[]>(["M", "S"]);
  const [running, setRunning] = useState(false);

  console.log("Input minutes:", inputMinutes);

  const startCountdown = () => {
    if (inputMinutes <= 0) return; // ignore invalid values
    setRemainingSeconds(inputMinutes * 60);
    setRunning(true);
    setActiveScreen("countdown");
  };


  useEffect(() => {
    if (!running) return;
    if (remainingSeconds <= 0) {
      setRunning(false);
      setActiveScreen("setCountdown"); /*not necessarily needed*/
      return;
    }

    const interval = setInterval(() => {
      setRemainingSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running, remainingSeconds]);

  const { days, hours, minutes, seconds } = convertSeconds(remainingSeconds);

  return (
    <div>
      <CountdownFormatSelector selected={selected} setSelected={setSelected} />

      <ScreenSwitcher
        screens={["setCountdown", "countdown"]}
        active={activeScreen}
        onSwitch={setActiveScreen}
        className="hello"
      />

      {activeScreen === "setCountdown" && (
        <>
          <SetCountdownInput onChange={setInputMinutes} value={inputMinutes} />
          <button onClick={startCountdown}>Start</button>
        </>
      )}

      {activeScreen === "countdown" && (
        <h1 className="timer-display">
          {selected.includes("D") && `${days.toString().padStart(2, "0")} : `}
          {selected.includes("H") && `${hours.toString().padStart(2, "0")} : `}
          {selected.includes("M") && `${minutes.toString().padStart(2, "0")} : `}
          {selected.includes("S") && seconds.toString().padStart(2, "0")}
        </h1>
      )}
    </div>
  );
}
