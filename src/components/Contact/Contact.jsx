import React from 'react';
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";




const Contact = () => {
    return (
        <div className='text-start max-w-full mx-auto flex bg-white p-2 mb-16'>
            <div className='bg-[#0C2E62] w-[41%] h-[780px] p-6 flex flex-col justify-between relative rounded-md'>
                <div>
                <h1 className='font-semibold text-4xl text-white'>
            Contact Information
        </h1>
        <h2 className='text-[#C9C9C9] text-lg'>
            Say Something to start a live chat!
        </h2>
                </div>
                <div className='bg-white opacity-[12%] w-[323px] h-[323px] rounded-full absolute bottom-[-20%] right-[-20%] '></div>
    
        <div>
            <div className='flex'>
            <BiSolidPhoneCall />
<h1>01626548646</h1>
            </div>
            <div className='flex'>
            <AiOutlineMail />

<h1>01626548646</h1>
            </div>
            <div className='flex'>
            <FaLocationDot />
<h1>01626548646</h1>
            </div>
        </div>
        <div className='flex gap-4'>
<div className='bg-[#F6AF03] rounded-full w-9 h-9 text-xl text-white flex justify-center items-center'>
    <FaTwitter className=''></FaTwitter>
</div>
<div className='bg-[#F6AF03] rounded-full w-9 h-9 text-xl text-white flex justify-center items-center'>
    <FaTwitter className=''></FaTwitter>
</div>
<div className='bg-[#F6AF03] rounded-full w-9 h-9 text-xl text-white flex justify-center items-center'>
    <FaTwitter></FaTwitter>
</div>
        </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Contact;