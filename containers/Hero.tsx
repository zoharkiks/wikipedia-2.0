import React from "react";
import { Icon } from "@iconify/react";
import { TopArticles, FeaturedArticle, FeaturedPicture, PopularCategories, ThisDay } from "../components";

const Hero = () => {
  return (
    <div className="  border-t px-4 pt-16 ">
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

      <div className="mt-20 grid max-w-[1440px] grid-cols-1 gap-4 md:mx-auto md:grid-cols-2 ">
        <section>
          <FeaturedPicture />
        </section>
        <section className="mt-10 md:mt-0">
          <ThisDay />
        </section>

        <section className="md:col-span-2  mt-10 md:mt-14 border-t">
          <FeaturedArticle/>
        </section>

        <section className="md:col-span-2 mt-10 md:mt-14  border-t py-10 ">
          <TopArticles/>
        </section>
{/* 
        <section className="md:col-span-2 mt-10 md:mt-14">
          <PopularCategories/>
        </section> */}
      </div>
    </div>
  );
};

export default Hero;
