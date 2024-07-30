export type CoordinateTuple = [number, number];
interface CompassProps {
  coordinates: CoordinateTuple;
  bearing: string;
  className?: string;
}

export default function Compass({
  coordinates,
  bearing,
  className,
}: CompassProps) {
  const position = `${coordinates[0]}:${coordinates[1]}:${bearing}`;
  const classes = className ? `compass ${className}` : `compass`;
  return (
    <section className={classes}>
      <p className={classes}>{`Position = ${position}`}</p>
    </section>
  );
}
