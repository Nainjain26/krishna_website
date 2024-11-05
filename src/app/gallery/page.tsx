"use client";
import React from "react";
// import Image from "next/image";
// import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../../components/ui/layout-grid";

const page = () => {
  return (
    <div className="  py-20 w-full">
      <LayoutGrid cards={cards} />
      <LayoutGrid cards={cards2} />
    </div>
  );
};

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: "/image-3.jpeg",
  },
  {
    id: 2,
    // content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/image-1.jpeg",
  },
  {
    id: 3,
    // content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/image-4.jpeg",
  },
  {
    id: 4,
    // content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/image-5.jpeg",
  },
];
const cards2 = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: "/image-7.jpeg",
  },
  {
    id: 2,
    // content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/image-8.jpeg",
  },
  {
    id: 3,
    // content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/image-6 .jpeg",
  },
  {
    id: 4,
    // content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/image-10.jpeg",
  },
];

export default page;
