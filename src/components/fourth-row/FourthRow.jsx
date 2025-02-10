import React from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import mask from '../../../public/Mask group.png'
import maskOver from '../../../public/Group 79.png'
import Button from '../button';
const FourthRow = () => {
    return (
        <div className='bg-[#FAFAFA]'>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-20 p-2 md:p-24'>
            <div className='text-center my-auto md:text-start w-[300px] md:w-[450px] lg:w-[500px]'>
                <h1 className='
#E77E49 text-2xl font-medium mb-8'>Our commitment to audit quality</h1>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-[#141B2B] mb-8 '>Building a more equitable working world</h1>
                <p className='text-[#848484] text-sm md:text-base lg:text-lg '>We embrace our responsibility as independent auditors to perform high-quality audits that promote trust and confidence in the capital markets.</p>
        <div className='flex flex-col md:flex-row gap-4 mt-4 pb-2 items-center md:items-start'>
                    <Button title={"Find Out More"}/>
                       
                    </div>
            </div>
<div className='relative mx-auto pt-4 md:pt-0'>
    <img src={mask} alt="" className='w-60 md:w-72 lg:w-full'/>
    <img src={maskOver} alt="" className='absolute top-44 md:top-56 lg:top-[350px] right-20 md:right-32 lg:right-44'/>
</div>
        </div>
        </div>
    );
};

export default FourthRow;