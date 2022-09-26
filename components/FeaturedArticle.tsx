import React from "react";
import Button from "./Button";
import Category from "./Category";

const FeaturedArticle = () => {
  return (
    <div className="grid grid-cols-1   md:grid-cols-3   md:gap-10 py-8 ">
      <h1 className=" font-calibri text-3xl md:hidden ">
        From Today's Featured Article
      </h1>

      <div className="mt-8 flex  h-full justify-center md:mt-0 ">
        <img
          src="https://www.tripsavvy.com/thmb/QZUBiTCTl2BvMAAla9vmUBqQEAk=/2120x1414/filters:fill(auto,1)/GettyImages-618355052-b865a78b33cf412b915909ad9d941f27.jpg"
          alt="featured-image"
          className="h-[28rem] object-cover  md:h-full "
        />
      </div>

      <div className="sp flex flex-col justify-evenly md:col-span-2 md:w-[85%]  ">
        <h1 className=" hidden font-calibri text-3xl md:inline-flex">
          From Today's Featured Article
        </h1>

        <div className="my-4 flex justify-center space-x-4 md:justify-start ">
          <div className="justif flex rounded-full border p-2 text-sm text-gray-500 md:text-xs">
            Music
          </div>
          <div className="justif flex rounded-full border p-2 text-sm text-gray-500 md:text-xs">
            Music
          </div>
          <div className="justif flex rounded-full border p-2 text-sm text-gray-500 md:text-xs">
            Music
          </div>
        </div>

        <p className=" my-4 h-[10rem] overflow-y-hidden text-gray-500 md:h-[20rem] ">
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
