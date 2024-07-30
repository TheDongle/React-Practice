// import arrowHead from "../assets/arrowhead.svg";
import Tiny from "../assets/tiny.gif";

// type CardinalDirections = "N" | "E" | "S" | "W";
// type NumberLessThan10 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// interface roverstuff extends React.FunctionComponent<{ isEmpty: boolean }> {
//   IntrinsicAttribn
// }

export interface RoverProps {
  isEmpty: boolean;
  angle: number;
}

function Rover({ isEmpty, angle }: RoverProps) {
  if (isEmpty) {
    return <img className="size-0" src={Tiny} alt="Blank Space" />;
  }
  return (
    <svg
      className={"arrow aspect-square fill-white stroke-beige stroke-[0.25rem]"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      transform={`rotate(${angle})`}
    >
      <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
    </svg>
  );
}

export default Rover;
