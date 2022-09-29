import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import Image from "next/future/image";

const FeaturedPicture = () => {
  const featuredImage = useSelector((state) => state.featured.featured.image);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h2 className=" font-calibri text-gray-500 ">
          Today's Featured Picture
        </h2>
        {/* TODO-ADD blurred placeholder */}
        <Image
          className="my-3 md:h-[22rem] w-full object-cover drop-shadow-xl"
          placeholder="empty"
          width="450"
          height="500"
          src={featuredImage?.image?.source}
          alt="featuredImage-picture"
        />
      </div>

      <div className=" mt-4 flex h-full flex-col  font-calibri  ">
        <div className="">
          <h2 className="text-xl  md:mt-4">
            {featuredImage?.structured?.captions?.en}
          </h2>
          <span className="text-sm text-gray-500">
            {featuredImage?.artist?.text}
          </span>
        </div>

        <p className="mt-4 mb-4 text-gray-500 md:mb-16">
          {featuredImage?.description?.text}
        </p>
      </div>
    </div>
  );
};

export default FeaturedPicture;
