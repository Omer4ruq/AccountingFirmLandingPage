import React from 'react';
import contact from '../../../public/contact-bg.jpg'
import { RiArrowRightDoubleFill } from "react-icons/ri";

const SixthRow = () => {
    return (
        <div className='relative w-auto h-[700px]'>
            <img src={contact} alt="" className='w-full h-full object-cover'/>
            <div className="absolute inset-0 bg-white/80"></div>
            <div className='absolute w-full top-10 left-[50%] translate-x-[-50%]  text-center pb-20 '>
                <h2 className='text-[#E77E49] mb-4 font-medium text-xl'>Everything You Need is Here</h2>
                <h1 className='text-[#141B2B] font-medium text-xl mx-auto max-w-[555px] md:text-3xl lg:text-4xl'>Consult us so we will take care of your worries</h1>
            </div>
            <div className='absolute left-[50%] translate-x-[-50%] top-52'>
                <div className='flex-1 lg:flex gap-10'>
                <div className='bg-white flex justify-between w-[400px] lg:w-[555px] p-10 rounded-md mb-6'>
                    <div className=''>
                        <div className='flex gap-4 items-center'>
                            <div className='bg-red-500 rounded-full w-3 h-3 '></div>
                            <h1 className='text-[#141B2B] text-lg font-semibold'>Customer Service</h1>
                        </div>
                        <p className='px-4 py-2 w-[200px] text-[#848484]  lg:font-normal text-sm lg:text-base'>contact us now by voice phone and we are ready to help you
                        </p>
                    </div>
                    <div className='bg-red-500 w-[60px] lg:w-[80px] h-[35px] lg:h-[60px] rounded-md text-center '>
                    <RiArrowRightDoubleFill className='text-white text-center translate-x-3 lg:translate-x-0 text-4xl lg:text-6xl'/>

                    </div>
                </div>
                <div className='bg-white flex justify-between w-[350px] md:w-[400px] lg:w-[555px] p-10 rounded-md mb-6'>
                    <div className=''>
                        <div className='flex gap-4 items-center  lg:w-[334px]'>
                            <div className='bg-red-500 rounded-full w-3 h-3'></div>
                            <h1 className='text-[#141B2B] text-lg font-semibold'>Contact Us</h1>
                        </div>
                        <p className='px-4 py-2 text-[#848484] w-[200px]'>no time to call? You can contact us via our existing social media

                        </p>
                    </div>
                    <div className='bg-red-500 w-[60px] lg:w-[80px] h-[35px] lg:h-[60px] rounded-md text-center  '>
                    <RiArrowRightDoubleFill className='text-white text-center translate-x-2 lg:translate-x-0 text-4xl lg:text-6xl'/>

                    </div>
                </div>
                </div>
              
            </div>
        </div>
    );
};

export default SixthRow;