import React, { useState } from 'react';
import logo from '../../../public/logo.png';
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
       
            <div className='bg-white mx-auto w-full px-10 lg:container py-4 flex justify-between items-center'>
                <div className='flex gap-3'>
                    <img src={logo} alt="Logo" />
                    <h1 className='text-2xl font-extrabold flex items-center'>Logoipsum</h1>
                </div>

                <div className='hidden text-xs lg:text-base font-medium md:flex'>
                    <ul className='hidden md:flex md:gap-4 lg:gap-6  '>
                        <li>Home</li>
                        <li>Product</li>
                        <li>Service</li>
                        <li>Contact us</li>
                        <li>About BeLife</li>
                    </ul>
                </div>

                <div>
                    <div className='bg-[#E77E49] bg-opacity-10 py-2 lg:py-3 px-4 lg:px-8  rounded-full hidden md:block'>
                        <h1 className='text-[#E77E49] font-normal text-base text-wrap '>My Account</h1>
                    </div>
                </div>

                <button 
                    className='md:hidden p-2 text-[#E77E49]' 
                    onClick={toggleSidebar}
                >
                    <FaBars />

                   
                </button>
            </div>

            {isSidebarOpen && (
                <div className="md:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 ">
                    <div className='flex justify-between items-center p-4'>
                        <img src={logo} alt="Logo" className="w-16" />
                        <button onClick={toggleSidebar}>
                        <IoMdClose />
                        </button>
                    </div>
                    <ul className='p-4'>
                        <li className='py-2'>Home</li>
                        <li className='py-2'>Product</li>
                        <li className='py-2'>Service</li>
                        <li className='py-2'>Contact us</li>
                        <li className='py-2'>About BeLife</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
