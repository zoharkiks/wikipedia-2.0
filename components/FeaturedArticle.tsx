import React from "react";
import Button from "./Button";
import Category from "./Category";

const FeaturedArticle = () => {
  return (
    <div className="grid grid-cols-1   md:gap-10   md:grid-cols-3 md:py-8 ">

<h1 className=" font-calibri text-3xl md:hidden ">
          From Today's Featured Article
        </h1>

      <div className="flex justify-center  h-full mt-8 md:mt-0 ">
        <img
          src="https://www.tripsavvy.com/thmb/QZUBiTCTl2BvMAAla9vmUBqQEAk=/2120x1414/filters:fill(auto,1)/GettyImages-618355052-b865a78b33cf412b915909ad9d941f27.jpg"
          alt="featured-image"
          className="h-[28rem] md:h-full  object-cover "
        />
      </div>

      <div className="flex flex-col justify-evenly md:col-span-2 md:w-[85%] sp  ">
        <h1 className=" font-calibri text-3xl hidden md:inline-flex">
          From Today's Featured Article
        </h1>

        <div className="flex justify-center space-x-4 md:justify-start my-4 ">
          <Category category="Music" />
          <Category category="Music" />
          <Category category="Music" />
        </div>

        <p className=" h-[10rem] overflow-y-hidden my-4 text-gray-500 md:h-[20rem] ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          similique fuga dolore voluptas sapiente, quibusdam debitis
          voluptatibus eligendi cum autem! Eius, adipisci sit. Repudiandae
          dolore error minus, iste beatae quia voluptatibus eligendi cum autem!
          Eius, adipisci sit. Repudiandae dolore error minus, iste beat rem,
          ipsum dolor sit amet consectetur adipisicing elit. Numquam similique
          fuga dolore voluptas sapiente, quibusdam debitis voluptatibus eligendi
          cum autem! Eius, adipisci sit. Repudiandae dolore error minus,
          isterem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          similique fuga dolore voluptas sapiente, quibusdam debitis
          voluptatibus eligendi cum autem! Eius, adipisci sit. Repudiandae
          dolore error minus, iste ? voluptatibus eligendi cum autem! Eius,
          adipisci sit. Repudiandae dolore error minus, iste beatae quia
          voluptatibus eligendi cum autem! Eius, adipisci sit. Repudiandae
          dolore error minus, iste beat rem, ipsum dolor sit amet consectetur
          adipisicing elit. Numquam similique fuga dolore voluptas sapiente,
          quibusdam debitis voluptatibus eligendi cum autem! Eius, adipisci sit.
          Repudiandae dolore error minus, isterem, ipsum dolor sit amet
          consectetur adipisicing elit. Numquam similique fuga dolore voluptas
          sapiente, quibusdam debitis voluptatibus eligendi cum autem! Eius,
          adipisci sit. Repudiandae dolore error minus, iste ?
        </p>

        <Button />
      </div>
    </div>
  );
};

export default FeaturedArticle;
