import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import Image from "next/future/image";
import { useRouter } from "next/router";

const ThisDay = () => {
  const featuredOnThisDay = useSelector(
    (state) => state.featured.featured.onthisday
  );

  const router = useRouter();

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2  ">
      <div>
        <h2 className=" font-calibri text-gray-500 ">On This Day</h2>
        <Image
          className="mt-4 h-[22rem]  w-full object-cover drop-shadow-xl "
          alt="on-this-day"
          src={featuredOnThisDay?.[0].pages[0].thumbnail.source}
          width="450"
          height="500"
        />
      </div>

      {/* TODO Add Blurred Background */}
      <div className="flex flex-col justify-between font-calibri md:mt-4 ">
        <div className="">
          <h2 className="text-xl  md:mt-4">{new Date().toDateString()}</h2>
        </div>

        <ul className="my-4 h-[10rem] list-disc  overflow-y-auto px-5 md:h-[16rem] ">
          {featuredOnThisDay?.map((date) => (
            <a target="blank" href={date.pages[0].content_urls.desktop.page}>
              <li className="mb-3 ">
                <span className="font-calibriBold text-black ">
                  {date.year}
                </span>{" "}
                - <span className="text-gray-500">{date.text}</span>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThisDay;
