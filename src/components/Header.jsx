import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-black p-4 sticky -top-0">
      <div className="max-w-[1240px] py-[5px] items-center  flex justify-between  mx-auto ">
        <div className="text-3xl font-bold text-white">Project Task</div>
        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white text-2xl md:hidden block"
          />
        )}

        <ul className="hidden md:flex text-white gap-10">
          <li>Our Products</li>
          <li>Easy Services</li>
          <li>Financial Calculators</li>
          <li>Register a Startup</li>
          <li>APIs</li>
        </ul>
        {/* Responsive Menu */}
        <ul
          className={`duration-500 md:hidden w-full h-screen text-white fixed bg-[gray]  top-[78px] ${
            toggle ? "left-[0]" : "left-[-100%]"
          } `}
        >
          <li className="p-3">Our Products</li>
          <li className="p-3">Easy Services</li>
          <li className="p-3">Financial Calculators</li>
          <li className="p-3">Blog</li>
          <li className="p-3">Register a Startup</li>
          <li className="p-3">APIs</li>
        </ul>
      </div>
    </div>
  );
}
