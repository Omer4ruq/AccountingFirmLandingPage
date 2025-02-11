import React from 'react';
import authLogo from '../../../public/authLogo.png';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Button from '../button';

const SeventhRow = () => {
    return (
        <div className='bg-white pt-20'>
<div className='mx-auto w-[95%]  max-w-[1140px] bg-[#0C2E62] h-[532px] rounded-2xl  p-4'>
    <div className='mx-auto w-fit pt-24'>
    <div className='bg-white bg-opacity-10 w-fit   mx-auto md:mx-0 px-4 py-2 rounded-lg flex items-center gap-2'>
                                    <img src={authLogo} alt="Auth Logo" className='w-6 md:w-8' />
                                    <h1 className='text-white font-semibold text-sm md:text-base'>Trusted Accountant!</h1>
                                </div>
                             
    </div>
    <h1 className='font-medium text-[30px] md:text-[40px] lg:text-[52px] leading-[40px] md:leading-[72px] mx-auto text-center text-white pt-6 md:w-[525px]'>Lets get started
    your own insurance</h1>
    <div className='flex justify-center gap-4 mt-4 pb-2 items-center mx-auto  left-[50%]'>
                    <Button title={"Get Started"}/>
                        <div className='flex items-center py-3 gap-2 text-white cursor-pointer'>
                            <p className=''>Learn More</p> <RiArrowRightDoubleFill />
                        </div>
                    </div>
        </div>
        
        </div>
        
    );
};

export default SeventhRow;