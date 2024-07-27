interface ButtonProps {
  value: string;
  className: string;
}
function Button({ value, className }: ButtonProps) {
  return <button className={`button ${className}`}>{value}</button>;
}
interface ControlsProps {
  className?: string;
}

export default function Controls({ className }: ControlsProps) {
  const buttons = Array(3);
  const buttonValues = ["Left", "Right", "Move"];
  for (let i = 0; i < 3; i++) {
    buttons[i] = (
      <li>
        <Button
          className={`control-button-${i} text-[5vh] rounded border-2 border-orange bg-cream hover:bg-orange focus:bg-orange px-1 leading-snug`}
          value={buttonValues[i]}
        ></Button>
      </li>
    );
  }
  return <menu className={`controls ${className}`}>{buttons}</menu>;
}
