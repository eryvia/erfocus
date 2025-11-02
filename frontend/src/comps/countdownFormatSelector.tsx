import { useState } from "react";
import FormatButton from "./FormatButtonProps";


export const CountdownFormatSelector = () => {
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