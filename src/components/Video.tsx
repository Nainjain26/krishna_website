import React from "react";

const Video = () => {
  return (
    <section className="   w-full py-12 md:py-24 lg:py-32">
      <div className="container space-y-8  md:px-6">
        <div className="space-y-4 text-center md:max-w-2xl md:mx-auto">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Immersive Video Experience
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Lose yourself in our captivating video loop, where time stands still
            and the world around you fades away.
          </p>
        </div>
        <div className="relative  md:h-[70vh] rounded-lg">
          <video className=" object-cover" autoPlay loop muted playsInline>
            <source src="../../show_video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Video;
