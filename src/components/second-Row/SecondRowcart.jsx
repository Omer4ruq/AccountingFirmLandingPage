import React from 'react';

const SecondRowCart = ({ title, desc, logo }) => {
  return (
    <div className="bg-white max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg w-full mx-auto flex flex-col shadow-lg rounded-lg p-6">
      <img src={logo} alt="" className="mx-auto w-20 md:w-24 lg:w-28" />
      <h1 className="text-center font-semibold text-lg md:text-xl mt-4">{title}</h1>
      <p className="text-center text-gray-600 text-base md:text-lg mt-4 px-4">
        {desc}
      </p>

      <div className="flex-grow"></div>

      <button className="bg-[#FDF2ED] hover:bg-[#f8d9c4] transition-colors py-3 px-6 font-medium text-base rounded-lg text-center mx-auto mb-4">
        Learn More
      </button>
    </div>
  );
};

export default SecondRowCart;
