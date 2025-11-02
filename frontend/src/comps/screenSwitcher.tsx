

interface ScreenSwitcherProps {
    active: string;
    onSwitch: (screen: "defaultTime" | "countdown") => void;
}

export const ScreenSwitcher = ({ active, onSwitch }: ScreenSwitcherProps) => {

    const screens: string[] = ["defaultTime", "countdown"];
    
    return (
        <div className="switcher">
            {screens.map((screen) => (
                <button 
                    key={screen}
                    className={active === screen ? "active" : ""}
                    onClick={() => onSwitch(screen as "defaultTime" | "countdown")}
                >
                    {screen}
                </button>
            ))}
        </div>
    );
}