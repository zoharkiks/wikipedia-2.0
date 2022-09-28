import React from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import Image from 'next/future/image'

const FeaturedPicture = () => {

const featured = useSelector((state)=>state.featured.featured.image)

console.log(featured);

  
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
          src={featured?.image?.source} 
          alt="featured-picture"
        />
      </div>

      <div className="md:mt-4 flex flex-col justify-between font-calibri h-full mt-4  md:mt-0">
        <div className="">
          <h2 className="text-xl  md:mt-4">{featured?.structured?.captions?.en}</h2>
          <span className="text-sm text-gray-500">
          {featured?.artist?.text}

          </span>
        </div>

        <p className="mt-4 mb-4 text-gray-500 md:mb-16">
        {featured?.description?.text}

        </p>

      </div>
    </div>
  );
};

export default FeaturedPicture;
