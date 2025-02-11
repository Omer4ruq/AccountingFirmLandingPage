import React, { useState } from 'react';
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";
import { div } from 'framer-motion/client';





const Contact = () => {
    const [focused, setFocused] = useState(null)
    const [query, setQuery] = useState("");
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "676c1c52-4d14-4865-95f5-84bbea894408");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
        <div>
<div className='text-start max-w-[1440px] mx-auto flex-1 md:flex bg-white p-2 mb-16'>
            <div className='bg-[#0C2E62] w-full md:w-[41%]  h-[780px] p-6 flex flex-col justify-between relative rounded-md'>
                <div>
                <h1 className='font-semibold text-3xl text-white'>
            Contact Information
        </h1>
        <h2 className='text-[#C9C9C9] font-normal text-xl pt-4'>
            Say Something to start a live chat!
        </h2>
                </div>
                <div className='hidden sm:block bg-white opacity-[12%] w-[323px] h-[323px] rounded-full absolute bottom-[-20%] right-[-20%] '></div>
                <div className='bg-white opacity-[12%] w-[166px] h-[166px] rounded-full absolute bottom-[5%] right-[5%] '></div>
    
        <div className='text-white space-y-10 text-lg font-normal'>
            <div className='flex items-center gap-3'>
            <BiSolidPhoneCall />
<h1>01626548646</h1>
            </div>
            <div className='flex items-center gap-3'>
            <AiOutlineMail />

<h1>demo@gmail.com</h1>
            </div>
            <div className='flex items-center gap-3'>
            <FaLocationDot />
<h1>132 Dartmouth Street Boston, <br />
    Massachusetts 02156 United States</h1>
            </div>
        </div>
        <div className='flex gap-4'>
<div className='bg-[#F6AF03] hover:bg-white rounded-full w-9 h-9 text-xl text-white hover:text-zinc-900 flex justify-center items-center'>
    <FaTwitter className=''></FaTwitter>
</div>
<div className='bg-[#F6AF03] hover:bg-white rounded-full w-9 h-9 text-xl text-white hover:text-zinc-900 flex justify-center items-center'>
    <FaInstagram className=''></FaInstagram>
</div>
<div className='bg-[#F6AF03] hover:bg-white rounded-full w-9 h-9 text-xl text-white hover:text-zinc-900 flex justify-center items-center'>
    <FaDiscord></FaDiscord>
</div>
        </div>
            </div>
            
            <div className='w-full md:w-[61%]'>

           
      

      <form className="max-w-full p-10 mx-auto mt-10 " onSubmit={onSubmit}>
        <div className="">
            <div className='flex gap-8 justify-between items-center text-[#8D8D8D]'> 
            <div className={`relative border-b mb-6 w-[45%]  ${focused === "firstName" ? "border-b-black" : "border-b"}`}>
            <label
              className={`transition-all ${focused === "firstName" ? "font-bold, text-[#011C2A]" : "font-normal"}`}
            >
              First Name
            </label>
            <input
              type="text"
              name='firstName'
              className="w-full border-none focus:outline-none"
              onFocus={() => setFocused("firstName")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div className={`relative border-b mb-6 w-[45%] ${focused === "lastName" ? "border-b-black" : "border-b"}`}>
            <label
              className={`transition-all ${focused === "lastName" ? "font-bold, text-[#011C2A]" : "font-normal"}`}
            >
              Last Name
            </label>
            <input
              type="text"
              name='lastName'
              className="w-full border-none focus:outline-none"
              onFocus={() => setFocused("lastName")}
              onBlur={() => setFocused(null)}
            />
          </div>
            </div>
    

    

            <div className='flex  justify-between text-[#8D8D8D]'> 
            <div className={`relative border-b mb-6 w-[45%] ${focused === "email" ? "border-b-black" : "border-b"}`}>
            <label
              className={`transition-all ${focused === "email" ? "font-bold, text-[#011C2A]" : "font-normal"}`}
            >
              Email
            </label>
            <input
              type="text"
              name='email'
              className="w-full border-none focus:outline-none"
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div className={`relative border-b mb-6 w-[45%] ${focused === "phone" ? "border-b-black" : "border-b"}`}>
            <label
              className={`transition-all ${focused === "phone" ? "font-bold, text-[#011C2A]" : "font-normal"}`}
            >
              Phone
            </label>
            <input
              type="text"
              name='phone'
              className="w-full border-none focus:outline-none"
              onFocus={() => setFocused("phone")}
              onBlur={() => setFocused(null)}
            />
          </div>
            </div>
            <div className={`relative border-b mb-6 w-full ${focused === "messege" ? "border-b-black" : "border-b"}`}>
            <label
              className={`transition-all ${focused === "messege" ? "font-bold, text-[#011C2A]" : "font-normal"}`}
            >
              messege
            </label>
            <input
              type="text"
              name='messege'
              className="w-full border-none focus:outline-none"
              onFocus={() => setFocused("messege")}
              onBlur={() => setFocused(null)}
            />
          </div>
          <div>
            <label className="text-[#011C2A] text-lg font-semibold">Select Subject?</label>
            <div className="flex-1 md:flex  items-center mt-4 space-x-4">
              <label className="flex items-center gap-2">
                <input 
                  type="radio" 
                  name="query" 
                  value="GeneralQuery" 
                  checked={query === "generalQuery"} 
                  onChange={() => setQuery("generalQuery")} 
                  className="hidden" 
                />
                <span className={`w-4 h-4 text-white border rounded-full flex items-center justify-center ${query === "generalQuery" ? " bg-[#011C2A]" : "border-gray-400"}`}>
                  {query === "generalQuery" && <MdOutlineDone />}
                </span>
                <span className="text-[#011C2A] font-normal text-sm">General Query</span>
              </label>
              
              <label className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name="query" 
                  value="extraQuery" 
                  checked={query === "extraQuery"} 
                  onChange={() => setQuery("extraQuery")} 
                  className="hidden" 
                />
                <span className={`w-4 h-4 border text-white text-sm rounded-full flex items-center justify-center ${query === "extraQuery" ? " bg-[#011C2A]" : "border-gray-400"}`}>
                  {query === "extraQuery" && <MdOutlineDone />}
                </span>
                <span className="text-[#011C2A] font-normal text-sm">Extra Query</span>
              </label>
              
              <label className="flex items-center space-x-2">
                <input 
                  type="radio" 
                  name="query" 
                  value="other" 
                  checked={query === "other"} 
                  onChange={() => setQuery("other")} 
                  className="hidden" 
                />
                <span className={`w-4 h-4 border text-white rounded-full flex items-center justify-center ${query === "other" ? " bg-[#011C2A]" : "border-gray-400"}`}>
                  {query === "other" && <MdOutlineDone />}
                </span>
                <span className="text-[#011C2A] font-normal text-sm">Other</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send Message</button>
        </div>
      </form>

      <span className='p-10'>{result}</span>
    </div>
   
        </div>

        </div>
        
    );
};

export default Contact;