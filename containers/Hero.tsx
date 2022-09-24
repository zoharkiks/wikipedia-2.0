import React from "react";
import { Icon } from "@iconify/react";
import { FeaturedPicture, ThisDay } from "../components";

const Hero = () => {
  return (
    <div className="  border-t px-4 pt-16">
      <div className="flex  flex-col items-center">
        <h1 className="w-[21rem]  text-center font-linux text-4xl leading-[3rem]">
          World's Biggest Source Of Knowledge{" "}
        </h1>
        <div className="relative flex w-[24rem] items-center justify-end md:w-[34rem]">
          <input
            className="mt-6 w-full rounded-3xl border border-gray-300 px-12 py-2 font-calibri outline-none"
            placeholder="Search Anything"
            type="search"
            name=""
            id=""
          />
          <Icon
            className="absolute left-5 bottom-3 h-5 w-5 text-gray-400 "
            icon="clarity:search-line"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 mt-20 md:grid-cols-2 gap-4 max-w-7xl md:mx-auto ">
        <FeaturedPicture />
        <ThisDay/>
      </div>
    </div>
  );
};

export default Hero;
