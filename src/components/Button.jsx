import React from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const Button = ({title}) => {
    return (
         <div className='bg-[#E77E49]   rounded-full '>
                                         
                                         <div className='flex items-center gap-1 md:gap-4 px-4 md:px-8 py-3 md:py-4'>
                                         <h1 className='text-white  font-normal md:font-medium text-sm md:text-base  '>Get Started Now</h1>
                                         <IoIosArrowDroprightCircle  className='text-white'/>
                                         </div>
                     
                                         </div>
    );
};

export default Button;