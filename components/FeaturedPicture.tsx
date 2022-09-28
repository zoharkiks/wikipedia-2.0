import React from "react";
import Button from "./Button";

const FeaturedPicture = () => {


  
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      <div>
        <h2 className=" font-calibri text-gray-500 ">
          Today's Featured Picture
        </h2>
        <img
          className="mt-4 h-[22rem]  w-full object-cover  "
          src="https://cdnb.artstation.com/p/assets/images/images/002/536/295/large/camille-kuo-oldking-camillekuo.jpg?1462869162"
          alt="featured-picture"
        />
      </div>

      <div className="md:mt-4 flex flex-col justify-between font-calibri">
        <div className="">
          <h2 className="text-xl  md:mt-4">King of Kings</h2>
          <span className="text-sm text-gray-500">
            (July 30, 1889 - June 30,1900)
          </span>
        </div>

        <p className="mt-4 mb-4 text-gray-500 md:mb-16">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          similique fuga dolore voluptas sapiente, quibusdam debitis
          voluptatibus eligendi cum autem! Eius, adipisci sit. Repudiandae
          dolore error minus, iste beatae quia?
        </p>

        <Button />
      </div>
    </div>
  );
};

export default FeaturedPicture;
