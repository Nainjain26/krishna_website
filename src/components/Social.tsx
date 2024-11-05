import React from "react";

import { FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaGoodreadsG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoMdMusicalNotes } from "react-icons/io";
import { RiAppleLine } from "react-icons/ri";
import Link from "next/link";

const Social = () => {
  return (
    <div className="relative  md:h-[80vh]">
        <div className="flex justify-center "><h1 className=" font-semibold text-2xl md:text-4xl">Listen Anytime Anywhere</h1></div>
      <div className="flex justify-center p-20">
        <div className=" h-32 w-32 md:h-64 md:w-64 bg-blue-300 rounded-[50%] flex items-center justify-center">
          <div className=" h-20 w-20 md:h-40 md:w-40 bg-white rounded-[50%] shadow-lg flex justify-center items-center transition ease-in-out delay-150 hover:scale-110 duration-200 ">
            <h1 className="text-center font-semibold text-sm md:text-xl">socialmedia</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white w-max p-2 md:p-5 rounded-[50%] shadow-2xl absolute top-[40%] right-[28%]  transition ease-in-out delay-150 hover:scale-110 duration-200  ">
          <Link href="https://open.spotify.com/track/6TKFoc5Hs9UNkW9lo2YvUP" target="_blank" rel="noopener noreferrer" className="text-xl md:text-3xl ">
            {<FaSpotify color="green" />}
          </Link>
        </div>
        <div className="bg-white w-max p-2 md:p-5 rounded-[50%] shadow-2xl absolute top-[40%] left-[28%] transition ease-in-out delay-150 hover:scale-110 duration-200 ">
          <Link href="https://www.jiosaavn.com/artist/krishna-chaturvedi-songs/2d0KsMo-sEU_" target="_blank" rel="noopener noreferrer" className="text-xl md:text-3xl">
            {<IoMdMusicalNotes color="teal" />}
          </Link>
        </div>

        <div className="bg-white w-max p-2 md:p-5 rounded-[50%] shadow-2xl absolute bottom-[20%] right-[35%] transition ease-in-out delay-150 hover:scale-110 duration-200 ">
          <Link href={"/twitter"} className="text-xl md:text-3xl ">
            {<FaXTwitter color="black" />}
          </Link>
        </div>
        <div className="bg-white w-max p-2 md:p-5 rounded-[50%] shadow-2xl absolute  bottom-[20%] left-[35%] transition ease-in-out delay-150 hover:scale-110 duration-200 ">
          <Link href="https://gaana.com/song/man-chal-vrindavan-dham-1" target="_blank" rel="noopener noreferrer" className="text-xl md:text-3xl ">
            {<FaGoodreadsG color="red" />}
          </Link>
        </div>
        <div className="bg-white w-max p-2 md:p-5 rounded-[50%] shadow-2xl absolute top-[15%] left-[15%] transition ease-in-out delay-150 hover:scale-110 duration-200 ">
          <Link href="https://www.youtube.com/results?search_query=krishna+chaturvedi+song" target="_blank" rel="noopener noreferrer" className="text-xl md:text-3xl ">
            {<FiYoutube color="red" />}
          </Link>
        </div>
        <div className="bg-white w-max p-2 md:p-5 rounded-[50%] shadow-2xl absolute top-[15%] right-[15%] transition ease-in-out delay-150 hover:scale-110 duration-200  ">
          <Link href="https://music.apple.com/us/search?term=krishna%20chaturvedi" target="_blank" rel="noopener noreferrer"className="text-xl md:text-3xl ">
            {<RiAppleLine color="black" />}
          </Link>
        </div>
        <div className="bg-white w-max p-2 md:p-5 rounded-[50%] shadow-2xl absolute bottom-[15%] left-[15%] transition ease-in-out delay-150 hover:scale-110 duration-200 ">
          <Link href="https://www.instagram.com/krishnachaturvedi_official/" target="_blank" rel="noopener noreferrer" className="text-xl md:text-3xl ">
            {<FaInstagram color="#FE2D5D" />}
          </Link>
        </div>
        <div className="bg-white w-max p-2 md:p-5 rounded-[50%] shadow-2xl absolute bottom-[15%] right-[15%] transition ease-in-out delay-150 hover:scale-110 duration-200 ">
          <Link  href="https://www.facebook.com/people/Krishna-Chaturvedi/100094148212851/" target="_blank" rel="noopener noreferrer"className="text-xl md:text-3xl ">
            {<FaFacebookF color="blue" />}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Social;
