import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import Image from 'next/future/image'

const FeaturedPicture = () => {

const featuredImage = useSelector((state)=>state.featured.featured.image)




  
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h2 className=" font-calibri text-gray-500 ">
          Today's Featured Picture
        </h2>
        {/* TODO-ADD blurred placeholder */}
        <Image
       className="h-full object-cover my-3 w-full"
       placeholder="empty"
          width="450"
          height='500'
          src={featuredImage?.image?.source} 
          alt="featuredImage-picture"
        />
      </div>

      <div className=" flex flex-col justify-between font-calibri h-full mt-4  ">
        <div className="">
          <h2 className="text-xl  md:mt-4">{featuredImage?.structured?.captions?.en}</h2>
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
