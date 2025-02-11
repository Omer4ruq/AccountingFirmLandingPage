import React from 'react';

const ThirdRowCart = ({title, desc, logo}) => {
    return (
        <div>
                  <div className='bg-[#FAFAFA] max-w-[160px] md:max-w-[220px] lg:max-w-[306px] h-[200px] md:h-[230px] '>
        <img src={logo} alt="" className='mx-auto pt-4'/>
        <h1 className='text-center font-semibold text-sm md:text-lg mt-4'>{title}</h1>
        <p className='text-center text-[#848484] text-sm md:text-lg mt-1 md:mt-4 p-2'>{desc}</p>
        
     
        

    </div>
        </div>
    );
};

export default ThirdRowCart;