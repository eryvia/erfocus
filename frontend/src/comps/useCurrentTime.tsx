import { useEffect, useState } from 'react'

export const useCurrentTime = () => {
      const [currentTime, setCurrentTime] = useState(new Date());

      useEffect(() => {
          const interval = setInterval(() => {setCurrentTime(new Date())}, 1000);
          return () => clearInterval(interval);
      }, []);

      const days: string = currentTime.getDate().toString().padStart(2, "0");
      const hours: string = currentTime.getHours().toString().padStart(2, "0");
      const minutes: string = currentTime.getMinutes().toString().padStart(2, "0");
      const seconds: string = currentTime.getSeconds().toString().padStart(2, "0");

      return {
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            days: days,
            date: currentTime,  
      };
};