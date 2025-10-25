
interface FormatButtonProps {
  label: string;
  active: boolean;
  onToggle: () => void;
}
const FormatButton = ({ label, active, onToggle } : FormatButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className={`format-button ${active ? "active" : ""}`}>
      {label}
    </button>
  );
};

export default FormatButton;