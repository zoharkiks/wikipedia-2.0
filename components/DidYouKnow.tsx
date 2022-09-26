import React from "react";
import Button from "./Button";

const DidYouKnow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10"
    >
      
        <img
        className="hidden md:inline-grid h-[30rem]  w-full object-cover"
        src="https://images.pexels.com/photos/13516347/pexels-photo-13516347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="did-you-know"
      />

        
    

      <div className="md:flex flex-col justify-between md:col-span-2" >
        <h1 className="  mb-4 font-calibri text-3xl md:border-b md:pb-4  ">Did You Know</h1>

        <ul className="h-[10rem] list-disc space-y-4 overflow-y-hidden px-5  font-calibri md:mb-48">
          <li className="border-b  pb-2">
            <span className="text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Corrupti, magnam esse? Officia voluptate totam non! Vel, eveniet
              similique optio numquam tempora id unde quibusdam inventore nulla
              commodi atque consequatur hic!
            </span>
          </li>
          <li className="border-b  pb-2">
            <span className="text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Corrupti, magnam esse? Officia voluptate totam non! Vel, eveniet
              similique optio numquam tempora id unde quibusdam inventore nulla
              commodi atque consequatur hic!
            </span>
          </li>
        </ul>
        <Button />

      </div>
    </div>
  );
};

export default DidYouKnow;
