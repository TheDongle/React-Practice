import Rover from "./Rover";
import { RoverProps } from "./Rover";

interface SquareProps extends RoverProps {}

function Square({ isEmpty = true, angle = 0 }: SquareProps) {
  return (
    <div className="square aspect-square rounded-sm bg-orange">
      <Rover angle={angle} isEmpty={isEmpty}></Rover>
    </div>
  );
}

interface PlateauProps {
  className?: string;
  angle: number;
  destination: number;
}

export default function Plateu({
  className,
  angle,
  destination,
}: PlateauProps) {
  const classes = className ? `plateu ${className}` : `plateu`;
  const squares = Array(100).fill(null);
  for (let i = 0; i < squares.length; i++) {
    const isEmpty = i !== destination;
    squares[i] = <Square angle={angle} isEmpty={isEmpty} key={i}></Square>;
  }
  return <div className={classes}>{squares}</div>;
}
