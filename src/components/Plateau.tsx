import Rover from "./rover";

interface SquareProps {
  isEmpty: boolean;
}

function Square({ isEmpty = true }: SquareProps) {
  return (
    <div className="square aspect-square rounded-sm bg-cream">
      <Rover isEmpty={isEmpty}></Rover>
    </div>
  );
}

// type CardinalDirections = "N" | "E" | "S" | "W";
// type NumberLessThan10 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export default function Plateu({ className }: { className?: string }) {
  const classes = className ? `plateu ${className}` : `plateu`;
  const squares = Array(100).fill(null);
  for (let i = 0; i < squares.length; i++) {
    const isEmpty = i !== 90;
    squares[i] = <Square isEmpty={isEmpty} key={i}></Square>;
  }
  return (
    <div className={classes}>
      {squares}
    </div>
  );
}
