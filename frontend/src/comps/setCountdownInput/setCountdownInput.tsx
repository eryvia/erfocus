
interface SetCountdownInputProps {
    onChange: (value: number) => void;
    value: number;
}


export default function SetCountdownInput({ onChange, value }: SetCountdownInputProps) {

  return (
    <div>
      <h2>Set Countdown Timer</h2>
      <input
        type="number"
        min="1"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        placeholder="Enter time in seconds"
      />
    </div>
  );
}
