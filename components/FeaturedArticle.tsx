import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import Image from "next/future/image";
import { Icon } from "@iconify/react";

const FeaturedArticle = () => {
  const featuredArticle = useSelector((state) => state.featured.featured.tfa);

  console.log(featuredArticle);

  return (
    <div className="grid grid-cols-1   py-8   md:grid-cols-3 md:gap-10 ">
      <h1 className=" font-calibri text-3xl md:hidden ">
        From Today's Featured Article
      </h1>

      <div className="mt-8 flex  h-full justify-center md:mt-0 ">
        {featuredArticle?.thumbnail?.source ? (
          <>
            <Image
              className="mt-4 h-[22rem]  w-full object-cover  "
              alt="on-this-day"
              src={featuredArticle.thumbnail.source}
              width="450"
              height="500"
            />
          </>
        ) : (
          <>
          <div className="bg-gray-300 w-full flex flex-col items-center justify-center  ">
          <Icon className="h-12 w-12 text-white" icon="carbon:no-image" />

          </div>
          </>
        )}
       
      </div>

      <div className="sp flex flex-col justify-evenly md:col-span-2 md:w-[85%]  ">
        <h1 className=" hidden font-calibri text-3xl md:inline-flex">
          From Today's Featured Article
        </h1>

        <div className="my-4 flex justify-center space-x-4 md:justify-start ">
          <div className="flex rounded-full border p-2 text-sm text-gray-500 md:text-xs">
            Music
          </div>
          <div className="flex rounded-full border p-2 text-sm text-gray-500 md:text-xs">
            Music
          </div>
          <div className="flex rounded-full border p-2 text-sm text-gray-500 md:text-xs">
            Music
          </div>
        </div>

        <p className=" my-4 h-[10rem] overflow-y-hidden text-gray-500 md:h-[20rem] ">
          {featuredArticle?.extract}
        </p>

        <Button
          onClick={() =>
            window.open(
              `${featuredArticle.content_urls.desktop.page}`,
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
};

export default FeaturedArticle;
