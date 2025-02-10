import React from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import mask from '../../../public/Mask group.png'
import maskOver from '../../../public/Group 79.png'
const FourthRow = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-20 p-2 md:p-24'>
            <div className='text-start w-[450px] md:w-[500px]'>
                <h1 className='
#E77E49 text-2xl font-medium mb-8'>Our commitment to audit quality</h1>
                <h1 className='text-5xl text-[#141B2B] mb-8 '>Building a more equitable working world</h1>
                <p className='text-[#848484] text-lg '>We embrace our responsibility as independent auditors to perform high-quality audits that promote trust and confidence in the capital markets.</p>
             <div className='flex gap-8 jus items-center'>
                             <div className='bg-[#E77E49] w-[170px] md:w-[235px] h-[44px] md:h-[56px] mt-6  rounded-full '>
                                 
                                 <div className='flex items-center gap-1 md:gap-4 px-4 md:px-8 py-3 md:py-4'>
                                 <h1 className='text-white  font-normal md:font-medium text-sm md:text-base  '>Find Out More</h1>
                                 <IoIosArrowDroprightCircle  className='text-white'/>
                                 </div>
             
                                 </div>
                              
                              
             
                             </div>
            </div>
<div className='relative mx-auto pt-4 md:pt-0'>
    <img src={mask} alt="" className='w-72 md:w-full'/>
    <img src={maskOver} alt="" className='absolute top-56 md:top-[350px] right-32 md:right-44'/>
</div>
        </div>
        </div>
    );
};

export default FourthRow;