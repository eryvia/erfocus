import { useCurrentTime } from '../comps/useCurrentTime';
import DragText from '../comps/motion-dev/dragText';

export default function DefaultTime() {
  const { hours, minutes, seconds, days } = useCurrentTime();

  return (
    <div>
      <DragText textDrag="Erfocus" />
      <p className="number-text">
        {days} : {hours} : {minutes} : {seconds}
      </p>
      {/*<p className='date-text'>Date: {date.toDateString()}</p>*/}
    </div>
  );
}