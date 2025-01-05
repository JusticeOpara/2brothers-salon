import Image from "next/image";
import React from "react";
import { assets } from "@/assets";

const AgeRestriction = () => (
  <div className="relative w-32 h-32">
    <div className="absolute inset-0 rounded-full border-2 border-gray-400 flex items-center justify-center">
      <span className="text-gray-400 text-3xl font-bold">18+</span>
    </div>

    <div className="absolute inset-0">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          id="textPath"
          d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
          className="text-gray-400"
        />
        <text className="fill-gray-400 text- font-medium">
          <textPath href="#textPath" startOffset="0">
            sorry, kids | adult only | sorry, kids | adult only |
          </textPath>
        </text>
      </svg>
    </div>
  </div>
);

const AppHero = () => {
  return (
    <div className="">
      <div className="flex justify-between my-8">
        <h2 className="text-8xl font-bold font-poppins w-[800px]">
          Restaurant, bar & lounge
        </h2>

        <AgeRestriction />
      </div>

      <div className="flex justify-between">
        <div className="w-full flex gap-6">
          <h3 className="font-medium text-5xl">In one place 24/7 </h3>
          <button className="text-lg px-4 bg-slate-500 font-medium rounded-md h-10">
            Book a table{" "}
          </button>
        </div>

        <div className="w-full">
          <Image
            src={assets.lounge}
            className="rounded-3xl h-[500px]"
            alt="lounge"
          />
        </div>
      </div>
    </div>
  );
};

export default AppHero;
