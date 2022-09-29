import React from "react";
import { useSelector } from "react-redux";
import Image from "next/future/image";

const TopArticles = () => {
  const { articles, date } = useSelector((state) => state.featured.topArticles);

  console.log(articles);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  md:gap-10">
      <Image
        className=" hidden h-[22rem] w-full  object-cover object-top drop-shadow-xl md:inline-grid  "
        alt="on-this-day"
        src={articles?.[0].thumbnail.source}
        width="450"
        height="500"
      />

      <div className="flex-col justify-between md:col-span-2 md:flex">
        <h1 className="  mb-8 font-calibri  text-3xl md:border-b md:pb-4   ">
          Top Read Articles
        </h1>

        <ul className="h-[20rem] list-disc space-y-4 overflow-y-auto px-5  font-calibri ">
          {articles?.map((article) => (
            <li
              onClick={() =>
                window.open(`${article.content_urls.desktop.page}`, "_blank")
              }
              className="border-b  pb-2 cursor-pointer"
            >
              <span className=" font-calibriBold ">
                {article.normalizedtitle} -{" "}
                <span className="font-calibri text-gray-500">
                  {article.description}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopArticles;
