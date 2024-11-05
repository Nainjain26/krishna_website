// import React from 'react'
"use client";
 
import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";
 

const Cards = () => {
    return (
        <div className="h-[80vh] md:h-[100vh] rounded-md flex flex-col text-center antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <div >
            <h1 className=" text-2xl md:text-4xl  font-semibold ">Most Recent Videos</h1>
            <p className="font-semibold pb-5 text-gray-600">Check out the latest video from our talented artists</p>
          </div>
          <InfiniteMovingCards
            items={youtube_video}
            direction="right"
            speed="slow"
          />
        </div>
      );
    }
     
    const youtube_video = [
      {
        url:"https://www.youtube.com/embed/CUfhpNxNV9c?si=aeVNxLujBRY3Ubmy"  ,
         
        name: "Krishna Chaturvedi",
        title: "Door na hona shambhu",
      },
      {
        url:"https://www.youtube.com/embed/HnlXl_hGPiE?si=AMbQM_v-VVAf60C-"  ,
        name: "Krishna Chaturvedi",
        title: "Tujhse preet lagi hai Radhe",
      },
      {
        url:"https://www.youtube.com/embed/HeOiosVizYo?si=0VZSNulEK-gCjH3f"  ,
        name: "Krishna Chaturvedi",
        title: "Sun bholeshanker",
      },
      {
        url:"https://www.youtube.com/embed/SrnEWGlX5bc?si=Zvh-mLO5dVbgNSBU" ,
        name: "Krishna Chaturvedi",
        title: "man chal vrindavandham",
      },
      {
        url:"https://www.youtube.com/embed/ylcW9gGNmJY?si=W__6Xlf2TWqNsbtt"  ,
        name: "Krishna Chaturvedi",
        title: "Mera malik hai shivaay",
      },
    ];


export default Cards
