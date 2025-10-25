import React, { useEffect, useState } from 'react'
import FormatButton from './FormatButtonProps';
import './App.css'

const CountdownFormatSelector = () => {
   const [selected, setSelected] = useState<string[]>([]);

   const toggleSector = (sector: string) => {
    setSelected((prev) => prev.includes(sector) ? prev.filter((u) => u !== sector) : [...prev, sector]);
  }
  console.log(selected);

  return (
    <div>
      {["days", "hours", "minutes", "seconds"].map((sector) => (
        <FormatButton
          key={sector}
          label={sector}
          active={selected.includes(sector)}
          onToggle={() => toggleSector(sector)}
        />
      ))}
      <p className="mt-2">Selected: {selected.join(", ") || "none"}</p>
    </div>
  );
};


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

  const GetCurrentTime = (): { hours: string; minutes: string; } => {
    return { hours, minutes };
  }

  
  return (
    <>
      <div className="timer">
        <h1>Current Date and Time</h1>
        <div className="dateNow">
          <p>{days} : {GetCurrentTime().hours} : {GetCurrentTime().minutes} : {seconds}</p>
        </div>
        <div className="datetime" >
          <CountdownFormatSelector />
        </div>
      </div> 
    </>
  )
}

//just want to say that <b>mdn_</b> really did help a tons.

export default App
