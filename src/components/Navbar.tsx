"use client";
import Link from "next/link";
// import React from 'react'
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white  z-[10] fixed top-0 w-full px-3 ">
      <div className="max-w-[1240px] py-[12px]  flex justify-between text-center text-black mx-auto">
        <div className="font-semibold text-2xl ">
          <span className="text-orange-600 text-3xl">K</span>rishna
          <span className="text-orange-600  text-3xl">C</span>haturvedi
        </div>
        {toggle ? (
          <div
            onClick={() => setToggle(!toggle)}
            className="text-2xl md:hidden block"
          >
            <IoClose />
          </div>
        ) : (
          <div
            onClick={() => setToggle(!toggle)}
            className=" text-2xl md:hidden block"
          >
            <IoMenu />
          </div>
        )}

        <ul className=" hidden md:flex gap-5 text-black">
          <li className=" hover:text-orange-600 font-semibold">
            <Link href="/">Home</Link>
          </li>
          <li className=" hover:text-orange-600 font-semibold">
            <Link href="/about">About</Link>
          </li>
          <li className=" hover:text-orange-600 font-semibold ">
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
        {/* navbar */}
        <ul
          className={` text-white duration-300 md:hidden w-full h-screen  fixed bg-black  top-[56px] ${
            toggle ? "left-[0%]" : "left-[-100%] z-[1000]"
          }`}
        >
          <li className="p-3 ">
            <Link href="/">Home</Link>
          </li>
          <li className="p-3">
            <Link href="/about">About</Link>
          </li>
          <li className="p-3">
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
