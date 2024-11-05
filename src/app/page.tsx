// import Image from "next/image";

import Cards from "@/components/Cards";
// import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Social from "@/components/Social";
import Video from "@/components/Video";

export default function Home() {
  return (
   <>
   
       <Hero/>
        <Cards/>
        <Social/>
        {/* <Contact/> */}
        <Video/>
   </>
  );
}
