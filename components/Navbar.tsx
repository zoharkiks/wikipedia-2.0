import React from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className="flex max-w-6xl items-center justify-between p-4  font-linux text-lg md:mx-auto md:px-6">
      <ul className=" hidden space-x-10 md:flex ">
        <li>Tools</li>
        <li>Contribution</li>
        <li>Print/Export</li>
      </ul>
      <div className="flex items-center">
        <Icon className="h-8 w-8 md:hidden " icon="bx:menu-alt-left" />
        <img
          className="h-7 md:hidden"
          src={images.logoMob.src}
          alt="logo-mob"
        />
        <img
          className="mr-20 hidden h-20 md:inline-flex"
          src={images.logoDesk.src}
          alt="logo-mob"
        />
      </div>

      <ul className="flex space-x-10">
        <li className="hidden md:inline-flex">Language</li>
        <li className="hidden md:inline-flex">Talk</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default Navbar;
