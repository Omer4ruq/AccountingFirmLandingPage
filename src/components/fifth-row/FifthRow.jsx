import React from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import fifthPick from "../../../public/Group 70.png"
const FifthRow = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-2 md:p-20'>
            <div>
                <img src={fifthPick} alt="" />
            </div>
          
                <div className='text-start w-[480px] md:w-auto'>
                                <h1 className='
                #E77E49 text-2xl font-medium mb-8'>Explore client success stories</h1>
                                <h1 className='text-2xl md:text-5xl text-[#141B2B] mb-8 '>we help companies navigate complexity and achieve results­</h1>
                                <p className='text-[#848484] text-base md:text-lg '>Examples of how a community of solvers brings together</p>
                             <div className='flex gap-8 jus items-center'>
                                             <div className='bg-[#E77E49] w-[190px] md:w-[235px] h-[44px] md:h-[56px] mt-6  rounded-full '>
                                                 
                                                 <div className='flex items-center gap-1 md:gap-4 px-4 md:px-8 py-3 md:py-4'>
                                                 <h1 className='text-white  font-normal md:font-medium text-sm md:text-base  '>View Case Studies</h1>
                                                 <IoIosArrowDroprightCircle  className='text-white'/>
                                                 </div>
                             
                                                 </div>
                                              
                                              
                             
                                             </div>
                            </div>
           
        </div>
    );
};

export default FifthRow;