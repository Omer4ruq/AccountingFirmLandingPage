import React from 'react';
import headerModel from '../../../public/header-model.png';
import qoute from '../../../public/qoute.png';
import love from '../../../public/love.png';
import authLogo from '../../../public/authLogo.png';
import groupLogo4 from '../../../public/Logo (4).png';
import groupLogo1 from '../../../public/Logo (1).png';
import groupLogo2 from '../../../public/Logo (2).png';
import groupLogo3 from '../../../public/Logo (3).png';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Button from '../button';

const Header = () => {
    return (
        <div className='w-full relative h-auto bg-[#0C2E62] flex flex-col items-center'>
            <div className='flex flex-col md:flex-row justify-center items-center p-4 md:p-8 w-full max-w-7xl'>

                <div className='relative flex justify-center w-full md:w-1/2'>
                    <img src={headerModel} alt="Header Model" className='w-full max-w-sm md:max-w-md lg:max-w-lg' />
                    <img src={qoute} alt="Quote" className='absolute w-40 md:w-64 lg:w-72 top-[60%] left-6 sm:left-2 md:top-[60%] md:left-8 lg:left-8' />
                    <img src={love} alt="Love" className='absolute w-10 md:w-14 top-[15%] right-10 md:right-[20%]' />
                </div>
                
          
                <div className='w-full md:w-1/2 items-center text-center md:text-left px-4 mt-8 md:mt-0'>
                    <div className='bg-white bg-opacity-10 w-fit mx-auto md:mx-0 px-4 py-2 rounded-lg flex items-center gap-2'>
                        <img src={authLogo} alt="Auth Logo" className='w-6 md:w-8' />
                        <h1 className='text-white font-semibold text-sm md:text-base'>Trusted Accountant!</h1>
                    </div>
                    <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-normal leading-tight mt-4'>
                        Prepare Everything <br /> Start Now for <br /> Your Family's Future
                    </h1>
                    <p className='text-[#A4C7FB] text-sm md:text-lg mt-4'>
                        Register as a BeLife member now & get the best <br className='hidden md:block' />
                        offer for your insurance benefit package and your family.
                    </p>
                    <div className='flex flex-col md:flex-row gap-4 mt-4 pb-6 items-center md:items-start'>
                    <Button title={"Get Started"}/>
                        <div className='flex items-center py-3 gap-2 text-white cursor-pointer'>
                            <p>Learn More</p> <RiArrowRightDoubleFill />
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl bg-white shadow-lg p-6 rounded-xl flex justify-center flex-wrap gap-6 md:gap-20'>
                <img src={groupLogo4} alt="Group Logo 4" className='w-14 md:w-20 lg:w-24' />
                <img src={groupLogo3} alt="Group Logo 3" className='w-14 md:w-20 lg:w-24' />
                <img src={groupLogo2} alt="Group Logo 2" className='w-14 md:w-20 lg:w-24' />
                <img src={groupLogo1} alt="Group Logo 1" className='hidden md:block w-14 md:w-20 lg:w-24' />
            </div>
        </div>
    );
};

export default Header;
