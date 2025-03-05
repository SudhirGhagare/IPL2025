import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import matches from './assets/knock-out.json'

function App() {

  console.log(matches, "matches");
  return (
    <div className="grid h-full grid-cols-3  gap-4 m-[42px]">
      <div className="grid grid-rows-2 gap-14">
        <div className="border-2 border-solid rounded-b-[12px]  border-[#15185f] h-42 w-75 shadow-xl">
          <strong className="flex justify-center p-1.4 bg-orange-500 text-white text-xl ">
            {matches[0]["Match Number"]}
          </strong>
        </div>

        <div className="border-2 border-solid rounded-b-[12px]  border-[#15185f] h-42 w-75 shadow-xl">
          <strong className="flex justify-center p-1.4 bg-orange-500 text-white text-xl ">
            {matches[1]["Match Number"]}
          </strong>
        </div>
      </div>
      <div>02</div>
      <div>03</div>
    </div>
  );
}

export default App;
