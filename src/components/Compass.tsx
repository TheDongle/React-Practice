type CardinalDirections = "N" | "E" | "S" | "W";
type NumberLessThanTen = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type CoordinateTuple = [NumberLessThanTen, NumberLessThanTen];
interface CompassProps {
  coordinates?: CoordinateTuple;
  bearing?: CardinalDirections;
  className?: string;
}

export default function Compass({
  coordinates,
  bearing,
  className,
}: CompassProps) {
  coordinates ??= [0, 0];
  bearing ??= "N";
  const position = `${coordinates[0]}:${coordinates[1]}:${bearing}`;
  const classes = className ? `compass ${className}` : `compass`;
  return (
    <section className={classes}>
      <p className="h-[100%] grow place-content-center place-self-center text-center text-[6vh] leading-snug">
        {`Current Position is ${position}`}
      </p>
    </section>
  );
}
