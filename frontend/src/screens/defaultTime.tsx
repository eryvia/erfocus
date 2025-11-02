import { useCurrentTime } from '../comps/useCurrentTime';

export default function DefaultTime() {
  const { hours, minutes, seconds, days, date } = useCurrentTime();

  return (
    <div>
      <h1>Current Time</h1>
      <p>
        {days} : {hours} : {minutes} : {seconds}
      </p>
      <p>Date: {date.toDateString()}</p>
    </div>
  );
}