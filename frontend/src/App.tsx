import React, { useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days: string = currentTime.getDate().toString().padStart(2, "0");
  const hours: string = currentTime.getHours().toString().padStart(2, "0");
  const minutes: string = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds: string = currentTime.getSeconds().toString().padStart(2, "0");

  interface CountdownProps  {
      days?: boolean,
      hours?: boolean,
      minutes?: boolean,
      seconds?: boolean
  }

  const GetCurrentTime = (): { hours: string; minutes: string; } => {
    return { hours, minutes };
  }

  const CountDownTimer: React.FC<CountdownProps> = ({ days, hours, minutes, seconds }) => {
    const now: Date = currentTime;
    console.log(now); 
    let time: string = "";
    if (days === undefined && hours === undefined && minutes === undefined && seconds === undefined) {
      time = now.toLocaleString();
      return time;
    } else {
      return <></>
  }}
  return (
    <>
      <div className="timer">
        <h1>Current Date and Time</h1>
        <div className="dateNow">
          <p>{days} : {GetCurrentTime().hours} : {GetCurrentTime().minutes} : {seconds}</p>
        </div>
        <div className="datetime" >
          <input type="checkbox" value="gaga" onChange={(e) => e.target.checked} />
         <p><CountDownTimer days={true} hours={true} minutes={true} seconds={true} /></p>
        </div>
      </div> 
    </>
  )
}

export default App
