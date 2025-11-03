import { useState } from "react";
import FormatButton from "./FormatButtonProps";

export const CountdownFormatSelector = () => {
   const [selected, setSelected] = useState<string[]>([]);

   const toggleSector = (sector: string) => {
    setSelected((prev) => prev.includes(sector) ? prev.filter((u) => u !== sector) : [...prev, sector]);
  }
  console.log(selected);

  const times = [
    {time: "days", nickname: "D"},
    {time: "hours", nickname: "H"},
    {time: "minutes", nickname: "M"},
    {time: "seconds", nickname: "S"},
  ]

  return (
    <div>
      {times.map((sector) => (
        <FormatButton
          key={sector.nickname}
          label={sector.nickname}
          active={selected.includes(sector.nickname)}
          onToggle={() => toggleSector(sector.nickname)}
        />
      ))}
      <p className="mt-2">Selected: {selected.join(" ,") || "none"}</p>
      
    </div>
  );
};