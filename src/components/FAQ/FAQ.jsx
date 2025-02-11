import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import { GrDown } from "react-icons/gr";



const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Webflow and why is it the best website builder?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?"
    },
    {
      question: "What is your favorite template from BRIX Templates?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?"
    },
    {
      question: "How do you clone a Webflow Template from the Showcase?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?"
    },
    {
      question: "Why is BRIX Templates the best Webflow agency out there?",
      answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?"
    },
 
  ];

  return (
    <div className="">
        <div className="bg-white rounded-lg text-start m-[5%] p-2 md:p-10 drop-shadow-md flex  justify-between">
        <h1 className=" text-basel md:text-2xl font-bold  text-[#170F49] lg:text-3xl ">
          1. FAQ Accordion V1
        </h1>
        <div className="bg-[#F3F1FF] p-1 md:p-4 rounded-3xl">
            <p className="text-[#0C2E62] text-center  text-xs md:text-base font-light md:font-medium">Preview Cloneable</p>
        </div>
        </div>
         
        <section className="bg-[#F7F7FB] m-[5%]">
      <div className="container max-w-4xl px-6 py-10 mx-auto">
      

<div className="mt-12 space-y-8 ">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 bg-white border-gray-100 rounded-lg">
              <button 
                className="flex items-center justify-between w-full pt-6 pb-0 px-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="font-semibold text-gray-700 ">{faq.question}</h2>

                <span className="p-2 rounded-full transition-all duration-300 drop-shadow-md"
                  style={{
                    backgroundColor: openIndex === index ? "#0C2E62" : "white ",
                    color: openIndex === index ? "white" : "gray"
                  }}
                >
                  {openIndex === index ? (
                   <GrDown />


                  ) : (
                    <SlArrowRight />

                  )}
                </span>
              </button>

              <div
      className={`grid transition-all duration-500 overflow-hidden ${
        openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="pt-2 pb-6 px-6 text-sm text-gray-500 overflow-hidden">
        {faq.answer}
      </div>
    </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
    </div>
 
  );
};

export default FAQ;
