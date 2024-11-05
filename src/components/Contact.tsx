import React from 'react'
import Image from 'next/image';
import img from "./image/image-4.png";

const Contact = () => {
  return (
    <div className='flex justify-evenly p-20 '>
     <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In error, repellendus <br />incidunt dicta aperiam officia quae corrupti cum voluptate assumenda sit sunt aspernatur <br /> amet inventore iure perspiciatis exercitationem id blanditiis!</div>
     <div>
     <div className="relative h-[250px] w-[290px] md:h-[350px] md:w-[390px]">
        <Image className=""
          src={img}
          alt="Example Image"
            />
      <div className=' h-[290px] w-[290px] md:h-[420px] md:w-[420px] rounded-[50%] bg-blue-200  z-[-1] absolute top-11 left-auto '></div>
      </div>
     </div> 
    </div>
  )
}

export default Contact
