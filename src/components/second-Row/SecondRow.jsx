import React from 'react';
import logo from '../../../public/Frame 14.png'
import logo1 from '../../../public/Frame 14 (1).png'
import logo2 from '../../../public/Frame 14 (2).png'
import logo3 from '../../../public/Frame 14 (3).png'
import SecondRowCart from './SecondRowcart';


const SecondRow = () => {
    const products = [
        {title: "Expense",
            desc: "Track expenses and re-invoice them in batches.",
            logo: logo
        },
        {title: "Inventory",
            desc: "Synchronize every transaction with your stocks to keep your valuation up to date",
            logo: logo1
        },
        {title: "Point of Sale",
            desc: "Easily create invoices from Point of Sale transactions into Odoo Accounting.",
            logo: logo2
        },
        {title: "Sales",
            desc: "Automatically create project tasks from sales orders.",
            logo: logo3
        },
    ]
    return (
        <div className='bg-[#FAFAFA] pt-20 md:pt-32 pb-16'>
            <div className='text-center mt-8 pb-20'>
                <h2 className='text-[#E77E49] mb-4 font-medium text-xl'>Everything You Need is Here</h2>
                <h1 className='text-[#141B2B] font-medium text-5xl'>Your Accounting Done Right.</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-2 pt-16'>
            {
   products.map((product, index) => ( 
        <SecondRowCart key={index} title={product.title} desc={product.desc} logo={product.logo} />
    ))
}
            </div>
        </div>
    );
};

export default SecondRow;