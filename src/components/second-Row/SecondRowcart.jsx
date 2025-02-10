import React from 'react';

const SecondRowCart = ({title, desc, logo}) => {
    return (
        <div className='bg-white w-[220px] md:w-[263px] md:h-[464px] mx-auto flex flex-col'>
        <img src={logo} alt="" className='mx-auto pt-4'/>
        <h1 className='text-center font-semibold text-lg mt-4'>{title}</h1>
        <p className='text-center text-[#848484] text-lg mt-4 p-2'>{desc}</p>
        
     
        <div className="flex-grow"></div>
    
        <button className='bg-[#FDF2ED] py-3 px-8 font-normal text-base text-center mx-auto mb-4'>
            Learn More
        </button>
    </div>
    );
};

export default SecondRowCart;