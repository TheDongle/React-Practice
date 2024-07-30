// import { useState } from "react";
import Plateau from "./components/Plateau";
import Compass from "./components/Compass";
import Controls from "./components/Controls";
import { useState } from "react";
import type { CoordinateTuple } from "./components/Compass";



function findPosition(
  nextbearing: string,
  currentPosition: CoordinateTuple,
): CoordinateTuple {
  let [nextX, nextY] = currentPosition;
  switch (nextbearing) {
    case "N":
      return nextY !== 9 ? [nextX, nextY + 1] : [nextX, 0];
    case "E":
      return nextX !== 9 ? [nextX + 1, nextY] : [0, nextY];
    case "S":
      return nextY !== 0 ? [nextX, nextY - 1] : [nextX, 9];
    default:
      return nextX !== 0 ? [nextX - 1, nextY] : [9, nextY];
  }
}

function findBearingAndPositition(
  instruction: string,
  currentBearing: string,
  currentPosition: CoordinateTuple,
) {
  const possibleBearings = ["N", "E", "S", "W"];
  let bearingIndex = possibleBearings.indexOf(currentBearing ?? "N");
  let nextPosition: CoordinateTuple = currentPosition ?? [0, 0];
  for (let i = 0; i < instruction.length; i++) {
    switch (instruction[i]) {
      case "R":
        bearingIndex = bearingIndex !== 3 ? bearingIndex + 1 : 0;
        break;
      case "L":
        bearingIndex = bearingIndex !== 0 ? bearingIndex - 1 : 3;
        break;
      default:
        nextPosition = findPosition(
          possibleBearings[bearingIndex],
          nextPosition,
        );
    }
  }
  return {
    nextBearing: possibleBearings[bearingIndex],
    nextPosition: nextPosition,
  };
}


export default function App() {
  const [instruction, setInstruction] = useState([""]);

  const startingCoordinates: CoordinateTuple = [0, 0];
  const [position, setPosition] = useState([startingCoordinates]);
  const [bearing, setBearing] = useState(["N"]);

  function updateInstruction(value: string) {
    setInstruction([...instruction.slice(), value]);
    handlePosition(
      value || "",
      bearing.at(-1) ?? "N",
      position.at(-1) ?? [0, 0],
    );
  }

  function handlePosition(
    instruction: string,
    currentBearing: string,
    currentPosition: CoordinateTuple,
  ) {
    const { nextBearing, nextPosition } = findBearingAndPositition(
      instruction,
      currentBearing,
      currentPosition,
    );
    setBearing([...bearing.slice(), nextBearing]);
    setPosition([...position.slice(), nextPosition]);
  }

  return (
    <div
      className="game grid min-h-screen w-min grid-cols-[auto_24px_minmax(auto,90vw)_24px_auto]
        gap-[0.25rem] bg-black"
    >
      <h1
        className="bg-grey col-span-1 col-start-3 flex min-h-[calc(10vh-0.25rem)]
          place-items-center place-self-center rounded text-5xl font-bold text-white"
      >
        Mars Rover
      </h1>
      <Controls
        updateInstruction={updateInstruction}
        className="col-span-1 col-start-3 grid min-h-[20vh] max-w-full items-center gap-1 px-1
          text-2xl"
      ></Controls>
      <Plateau
        destination={nextDestination(position.at(-1) ?? [0, 0])}
        angle={nextAngle(bearing.at(-1) ?? "N")}
        className={`col-span-1 col-start-3 mx-auto grid aspect-square min-h-[calc(60vh-0.25rem)]
          max-w-[90vw] grid-cols-10 gap-[0.25em] bg-black`}
      ></Plateau>
      <Compass
        bearing={bearing.at(-1) || "N"}
        coordinates={position.at(-1) ?? [0, 0]}
        className={`bg-grey col-span-1 col-start-3 flex min-h-[calc(10vh-0.25rem)] grow
          place-content-center self-center text-center text-4xl font-semibold leading-snug
          text-white`}
      ></Compass>
    </div>
  );
}

function nextDestination(position: CoordinateTuple): number {
  const [col, row] = position;
  return parseInt(`${-1 * (row - 9)}${col}`);
}

function nextAngle(bearing: string): number {
  switch (bearing) {
    case "N":
      return 0;
    case "E":
      return 90;
    case "S":
      return 180;
    default:
      return 270;
  }
}