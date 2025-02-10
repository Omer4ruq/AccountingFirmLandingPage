import React from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import ThirdRowCart from './ThirdRowCart';
import logo from '../../../public/Frame 27.png'
import logo1 from '../../../public/Frame 28.png'
import logo2 from '../../../public/Frame 29.png'
import logo3 from '../../../public/Frame 30.png'
import Button from '../button';
const ThirdRow = () => {
     const products = [
            {title: "Cetified Platform",
                desc: "Certification with plan and assessments",
                logo: logo
            },
            {title: "24/7 Service",
                desc: "Service that is available at every time and every day.",
                logo: logo1
            },
            {title: "9+ Years Experience",
                desc: "9+ years experience in accounting service",
                logo: logo2
            },
            {title: "High Value, Low price",
                desc: "Low cost with premium service",
                logo: logo3
            },
        ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-20 p-2 md:p-24'>
            <div className='text-start w-[500px]'>
                <h1 className='
#E77E49 text-2xl font-medium mb-8'>Best Offer For You</h1>
                <h1 className='text-5xl text-[#141B2B] mb-8 '>Do More, In Less Time!</h1>
                <p className='text-[#848484] text-lg '>Send reminders to your debtors in just a few clicks. Simply set-up and automate follow-ups to get paid more quickly.</p>
             <div className='flex gap-8 jus items-center'>
                             {/* <div className='bg-[#E77E49] w-[170px] md:w-[235px] h-[44px] md:h-[56px] mt-6  rounded-full '>
                                 
                                 <div className='flex items-center gap-1 md:gap-4 px-4 md:px-8 py-3 md:py-4'>
                                 <h1 className='text-white  font-normal md:font-medium text-sm md:text-base  '>Get Started Now</h1>
                                 <IoIosArrowDroprightCircle  className='text-white'/>
                                 </div>
             
                                 </div> */}
                            <Button title={"Get Started"}/>
                                <div className='flex gap-2 items-center pt-6 text-base font-medium text-[#848484]'>
                                <p>Learn More 
                                </p>
                                <RiArrowRightDoubleFill />
                                </div>
             
                             </div>
            </div>
<div className='grid grid-cols-2 gap-4 pt-10 md:pt-0'>{
products.map((product, index) => ( 
        <ThirdRowCart key={index} title={product.title} desc={product.desc} logo={product.logo} />
    ))
}
</div>
        </div>
    );
};

export default ThirdRow;