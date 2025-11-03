import "./screenSwitcher.css";

/*

Mine original, but i had to use this component more times than i thought, so generalized it. 2nd version below.

interface ScreenSwitcherProps {
    active: "defaultTime" | "countdown";
    onSwitch: (screen: "defaultTime" | "countdown") => void;
}

export const ScreenSwitcher = ({ active, onSwitch }: ScreenSwitcherProps) => {

    const screens: Array<"defaultTime" | "countdown"> = ["defaultTime", "countdown"];
    
    return (
        <div className="switcher">
            {screens.map((screen) => (
                <button 
                    key={screen}
                    className={active === screen ? "active" : ""}
                    onClick={() => onSwitch(screen)}
                >
                    {screen}
                </button>
            ))}
        </div>
    );
}*/

interface ScreenSwitcherProps<T extends string> {
  screens: T[];
  active: T;
  onSwitch: (screen: T) => void;
  className?: string; /*we could use variety bewteen both, but i will be using this one in future, so im keepin it like this  */
} 

export function ScreenSwitcher<T extends string>({ screens, active, onSwitch, className }: ScreenSwitcherProps<T>) {
  return (
    <div className={`switcher-${className}`}>
      {screens.map((screen) => (
        <button
          key={screen}
          className={`switcher-btn${className ? ` ${className}` : ""} ${active === screen ? "active" : ""}`}
          onClick={() => onSwitch(screen)}
        >
          {screen}
        </button>
      ))}
    </div>
  );
}