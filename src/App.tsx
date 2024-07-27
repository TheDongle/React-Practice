// import { useState } from "react";
import Plateau from "./components/Plateau";
import Compass from "./components/Compass";
import Controls from "./components/Controls";


function App() {
  return (
    <div className="game flex h-screen w-fit flex-col gap-[0.25rem] bg-purple py-[0.25rem]">
      <Compass
        className={
          "flex h-fit place-content-center rounded bg-cream text-xl font-semibold"
        }
      ></Compass>
      <Plateau
        className={
          "mx-auto grid aspect-square h-[80vh] grid-cols-10 gap-[0.25rem] bg-purple"
        }
      ></Plateau>
      <Controls className="flex h-fit justify-evenly gap-x-[0.25rem] text-xl font-semibold"></Controls>
    </div>
  );
}

export default App;
