import React from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import fifthPick from "../../../public/Group 70.png"
import Button from '../button';
const FifthRow = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 p-2 md:p-20'>
            <div>
                <img src={fifthPick} alt="" />
            </div>
          
                <div className='text-center my-auto md:text-start w-[300px] md:w-[450px] lg:w-[500px]'>
                                <h1 className='
                #E77E49 text-2xl font-medium mb-8'>Explore client success stories</h1>
                                <h1 className='text-2xl md:text-5xl text-[#141B2B] mb-8 '>we help companies navigate complexity and achieve results­</h1>
                                <p className='text-[#848484] text-base md:text-lg '>Examples of how a community of solvers brings together</p>
                            
                             <div className='flex flex-col md:flex-row gap-4 mt-4 pb-2 items-center md:items-start'>
                    <Button title={"View Case Studies"}/>
                       
                    </div>
                                              
                                              
                             
                                            
                            </div>
           
        </div>
    );
};

export default FifthRow;