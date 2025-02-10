import React from 'react';
import contact from '../../../public/contact-bg.jpg'

const SixthRow = () => {
    return (
        <div className='relative w-auto h-[700px]'>
            <img src={contact} alt="" className='w-full h-full object-cover'/>
            <div className="absolute inset-0 bg-white/50"></div>
        </div>
    );
};

export default SixthRow;