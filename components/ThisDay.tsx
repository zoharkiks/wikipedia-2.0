import React from "react";
import Button from "./Button";

const ThisDay = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2  ">
      <div>
        <h2 className=" font-calibri text-gray-500 ">On This Day</h2>
        <img
          className="mt-4 h-[22rem]  w-full object-cover  "
          src="https://sothebys-com.brightspotcdn.com/dims4/default/4fe8a62/2147483647/strip/true/crop/2356x2861+0+0/resize/684x831!/format/webp/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fdotcom%2Ff8%2Fb6%2F87cea0c04020b03b05e450c3aa4d%2Fself-portrait-with-a-bandaged-ear-vincent-van-gogh.jpg"
          alt="featured-picture"
        />
      </div>

      {/* TODO Add Blurred Background */}
      <div className="flex flex-col justify-between font-calibri md:mt-4 ">
        <div className="">
          <h2 className="text-xl  md:mt-4">King of Kings</h2>
          <span className="text-sm text-gray-500">
            Islamic New Year (2022, 12AH )
          </span>
        </div>

        <ul className="my-4 h-[10rem] list-disc  overflow-y-hidden px-4 md:h-[16rem] ">
          <li className="mb-3">
            <span className="font-calibriBold text-black ">1865</span> -{" "}
            <span className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              pariatur odio perspiciatis dolorem, quis dolore eum dolor
              explicabo itaque quidem. Aperiam rem autem nobis accusamus
              repellendus nihil ab totam temporibus?
            </span>
          </li>

          <li className="">
            <span className="font-calibriBold text-black ">1865</span> -{" "}
            <span className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              pariatur odio perspiciatis dolorem, quis dolore eum dolor
              explicabo itaque quidem. Aperiam rem autem nobis accusamus
              repellendus nihil ab totam temporibus?
            </span>
          </li>
        </ul>

        <Button />
      </div>
    </div>
  );
};

export default ThisDay;
