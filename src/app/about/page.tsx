// import { h1 } from 'framer-motion/client'
import React from 'react'
import Image from 'next/image'
import img from "../../components/image/image-4.png";
// import { div } from 'framer-motion/m';


const page = () => {
  return (
  <div className='p-12 md:h-[80vh] md:p-24  md:grid grid-cols-2    '>
    
    <div className="relative h-[280px] w-[290px] md:h-[375px] md:w-[415px] rounded-b-2xl ">
        <Image className="rounded-b-full"
          src={img}
          alt="Example Image"
           />
      <div className=' h-[290px] w-[290px] md:h-[430px] md:w-[430px] rounded-[50%] bg-blue-100  z-[-1] absolute top-11 left-auto '></div>
      </div>
      <div className='pt-24 text-sm md:text-xl '>
      <p className='text-gray-700  '>Meet <span className='font-bold'>Krishna Chaturvedi</span> a passionate dreamer from Rewa &ldquo; Madhya Pradesh&rdquo; who defied the odds to follow his heart in music. Raised in a middle-class family with aspirations of a government job Krishna chose a path less traveled  fueled by his unwavering love for music and the support of his mother. Despite financial hardships and self-doubt he honed his craft at Pancham Nishad Sangeet Sansthan under the guidance of Shrimati Shobha Chaudhari.

His journey took off when his song &quot;Mera Malik Hai Shivay &quot; went viral paving the way for hit collaborations with Pankaj Rathore &ldquo; including &quot;Durr Na Hona Shambhu,&quot; &quot;Bhajman Radhe&quot; and &quot;Mere Bholenath Ji&quot; each topping charts and captivating social media.

Krishna&apos;s success is a blend of talent &ldquo; grit &ldquo; and unwavering devotion. His story inspires us all to chase our passions and believe that  with resilience  dreams do come true.</p>
     </div>
  </div>


  )
}

export default page
