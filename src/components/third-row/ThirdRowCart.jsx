import React from 'react';

const ThirdRowCart = ({title, desc, logo}) => {
    return (
        <div>
                  <div className='bg-[#FAFAFA] w-[200px] md:w-[306px] h-[200px] md:h-[230px]  '>
        <img src={logo} alt="" className='mx-auto pt-4'/>
        <h1 className='text-center font-semibold text-base md:text-lg mt-4'>{title}</h1>
        <p className='text-center text-[#848484] text-sm md:text-lg mt-1 md:mt-4 p-2'>{desc}</p>
        
     
        <div className="flex-grow"></div>

    </div>
        </div>
    );
};

export default ThirdRowCart;