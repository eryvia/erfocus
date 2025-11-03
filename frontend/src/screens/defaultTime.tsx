import { useCurrentTime } from '../comps/useCurrentTime';
import DragText from '../comps/motion-dev/dragText';

export default function DefaultTime() {
  const { hours, minutes, seconds, days, date } = useCurrentTime();

  return (
    <div>
      <DragText textDrag="Hello, ..... drag me out, if u want me gone." />
      <p className="number-text">
        {days} : {hours} : {minutes} : {seconds}
      </p>
      <p>Date: {date.toDateString()}</p>
    </div>
  );
}