import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";

// import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white p-4 md:p-20">
      <div className="max-w-[1240px] mx-auto pt-10   md:grid grid-cols-2  gap-4">
        {/* MediaPro Info Section */}
        <div className="bg-white  w-max rounded-xl shadow-xl h-auto sm:h-[200px] md:h-[300px] p-4 md:p-8">
          <div className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-4xl">
            <span className="text-orange-600">K</span>
            <span className=" text-black">rishna</span>
            <span className="text-orange-600 ml-4">C</span>
            <span className=" text-black">haturvedi</span>
          </div>
          <div className="flex items-center pt-3 md:pt-10 cursor-pointer">
            <div className="text-sm md:text-2xl text-orange-600 pr-3">
              <FaLocationDot />
            </div>
            <div className="text-sm md:text-xl">Mumbai</div>
          </div>
          <div className="flex items-center pt-3 cursor-pointer">
            <div className="text-sm md:text-2xl text-orange-600 pr-3">
              <IoMdMailUnread />
            </div>
            <div className="text-sm md:text-xl ">
            Krishnachaturvedi.mahadev@gmail.com
            </div>
          </div>
          <div className="flex items-center pt-3 cursor-pointer">
            <div className="text-sm md:text-2xl text-orange-600 pr-3">
              <IoCall />
            </div>
            <div className="text-sm md:text-xl">+91 7000736998</div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="px-3 py-4 md:px-7 md:py-8">
          <h1 className="text-xl md:text-2xl font-semibold pb-3 md:pb-9">
            ContactUs
          </h1>
          <input
            type="text"
            placeholder="Enter your email..."
            className="p-2 md:p-3 rounded-2xl w-full border border-black "
          />
         <div className="pt-3  "> <button type="button" className="bg-red-500 rounded-lg font-semibold transition delay-150 hover:scale-110 duration-200 hover:bg-blue-300 p-2 text-white text-sm md:text-lg">submit</button></div>
          <p className="text-gray-400 pt-2 md:pt-5">
            Get the latest news & updates
          </p>
          <div className="flex pt-2 md:pt-5">
            <div className="pr-1 md:pr-3">
              <p className="p-2 text-sm md:text-2xl w-max bg-orange-600 rounded-[50%] transition ease-in-out delay-150 hover:scale-110 duration-200 hover:bg-blue-300 text-white cursor-pointer">
              <Link  href="https://www.facebook.com/people/Krishna-Chaturvedi/100094148212851/" target="_blank" rel="noopener noreferrer"className="text-xl md:text-3xl ">
            {<FiFacebook  />}
          </Link>
              </p>
            </div>
            <div className="pr-1 md:pr-3">
              <p className="p-2 text-sm md:text-2xl w-max bg-orange-600 rounded-[50%] transition ease-in-out delay-150 hover:scale-110 duration-200 hover:bg-blue-300 text-white cursor-pointer">
                {<FaXTwitter />}
              </p>
            </div>
            <div className="pr-1 md:pr-3">
              <p className="p-2 text-sm md:text-2xl w-max bg-orange-600 rounded-[50%] transition ease-in-out delay-150 hover:scale-110 duration-200 hover:bg-blue-300 text-white cursor-pointer">
              <Link href="https://www.instagram.com/krishnachaturvedi_official/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-3xl ">
            {<FaInstagram  />}
          </Link>
              </p>
            </div>
            {/* <div className='pr-1 md:pr-3'><p className='p-2 text-sm md:text-2xl text-white w-max bg-orange-600 rounded-[50%]'>{<FaLinkedinIn/>}</p></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
