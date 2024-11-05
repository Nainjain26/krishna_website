import React from 'react'
import Image from 'next/image';
import img from "./image/image-1.jpeg";

const Album = () => {
  return (
    <div className='bg-yellow-100 pt-10'>
      <div className='text-center  flex justify-center'>
        <div>
          <h1 className='text-2xl md:text-4xl font-semibold pb-3'>Most Recent Videos</h1>
          <p className='text-sm md:text-xl text-slate-600'>Check out the latest videos from our talented artists.</p>
        </div>
      </div>
      <div className=' pt-10 pb-10 '>
      <div className='flex justify-center gap-8 md:flex-row flex-col '>
         <div>
          <Image src={img} alt="image-1" width={300} height={300} className='rounded-md  transition ease-in-out delay-150 hover:scale-110 duration-200 ' />
           <h1 className='pt-4 text-slate-600'>SINGER- Krishna Chaturvedi </h1>
           <h1 className='pt-1 text-slate-600'>COMPOSER- Pankaj VRK</h1>
           <h1 className='pt-1 text-slate-600'>LYRICS- Gourav Pawar Bhawsar</h1>  
          </div>
          <div>
          <Image src={img} alt="image-1" width={300} height={300} className='rounded-md  transition ease-in-out delay-150 hover:scale-110 duration-200 ' />
           <h1 className='pt-4 text-slate-600'>SINGER- Krishna Chaturvedi </h1>
           <h1 className='pt-1 text-slate-600'>COMPOSER- Pankaj VRK</h1>
           <h1 className='pt-1 text-slate-600'>LYRICS- Gourav Pawar Bhawsar</h1>  
          </div>
          <div>
          <Image src={img} alt="image-1" width={300} height={300} className='rounded-md  transition ease-in-out delay-150 hover:scale-110 duration-200 ' />
           <h1 className='pt-4 text-slate-600'>SINGER- Krishna Chaturvedi </h1>
           <h1 className='pt-1 text-slate-600'>COMPOSER- Pankaj VRK</h1>
           <h1 className='pt-1 text-slate-600'>LYRICS- Gourav Pawar Bhawsar</h1>  
          </div>
          
       </div>
        
      </div>
    </div>
  )
}

export default Album
