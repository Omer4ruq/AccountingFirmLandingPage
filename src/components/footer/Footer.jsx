import React from 'react';
import logo from '../../../public/logo.png';

const Footer = () => {
    return (
      <footer className="bg-white dark:bg-gray-900">
        <div className="container p-6 mx-auto">
          <div className="lg:flex gap-10">
            <div className='w-[320px] '>
            <div className='flex gap-3 mb-4'>
                           <img src={logo} alt="Logo" className='w-10 h-10'/>
                           <h1 className='text-2xl font-extrabold flex '>Logoipsum</h1>
                       </div>
                       <p className='font-normal text-sm'>We are is a unique value proposition is to be at the same time very easy to use and fully integrated.</p>
            </div>
        
            <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {[
                  { title: "About", links: ["Company", "Community", "Careers"] },
                  { title: "Blog", links: ["Tech", "Music", "Videos"] },
                  { title: "Products", links: ["Mega Cloud", "Aperion UI", "Meraki UI"] },
                  { title: "Contact", links: ["+1 526 654 8965", "example@email.com"] }
                ].map((section, index) => (
                  <div key={index}>
                    <h3 className="text-gray-700 uppercase dark:text-white">{section.title}</h3>
                    {section.links.map((link, linkIndex) => (
                      <a key={linkIndex} href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                        {link}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
          <div>
            <p className="text-center text-gray-500 dark:text-gray-400">© Brand 2020 - All rights reserved</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  

