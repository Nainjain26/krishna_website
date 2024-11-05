"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { AuroraBackground } from "./AuroraBackground";
const Hero = () => {
  return (
    <AuroraBackground className="">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Krishna Chaturvedi
        </div>
        <div className="font-extralight text-base md:text-2xl text-center dark:text-neutral-200 py-4">
          Krishna Chaturvedi is a renowned artist who sings captivating
          religious songs. His music is available on popular platforms like
          Spotify, YouTube, Instagram, and Jio Saavn.
        </div>
        <div className="flex ">
          <div className="bg-black text-white px-3 py-2 w-max rounded-lg mr-3 transition ease-in-out delay-150 hover:scale-110 duration-300 ">
            <Link href="https://open.spotify.com/track/6TKFoc5Hs9UNkW9lo2YvUP" target="_blank" rel="noopener noreferrer">Listen On Spotify </Link>
          </div>
          <div className="bg-black text-white px-3 py-2 w-max rounded-lg transition ease-in-out delay-150 hover:scale-110 duration-300">
          <Link href="https://www.youtube.com/results?search_query=krishna+chaturvedi+song" target="_blank" rel="noopener noreferrer">Watch On Youtube </Link>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;
