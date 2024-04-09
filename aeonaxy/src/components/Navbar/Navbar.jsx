import React from 'react'
import { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { ImSphere } from "react-icons/im";
import { RiExternalLinkLine } from "react-icons/ri";


const Navbar = () => {

    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    return (

        <div className='  h-16 w-full bg-white  flex items-center justify-between pl-20 pr-8  gap-5
             max-[390px]:pl-2  max-[390px]:h-auto max-[390px]:flex-col max-[390px]:p-5' >

            <div className=' flex font-bold text-sm gap-1 items-center'>
                <div className=' flex flex-col items-center justify-center h-8 w-8 rounded-full border-2 gap-0 border-gray-950 mr-2'>
                    <p className=' absolute mb-4  text-2xl'>~</p>
                    <p className=' absolute mt-1'>|</p>
                </div>
                Frequently Ask quetions</div>
            <div className='flex gap-5 items-center max-[390px]:pl-4 ' >
                <a className='flex items-center max-[390px]:pl-1  font-bold text-sm ' href=""> Go to Tilda.cc<RiExternalLinkLine className=' text-light-300  max-[390px]: text-xl ' /> </a>
                <a className='flex items-center max-[390px]:pl-1 font-bold text-sm' href="">Go to Help Center<RiExternalLinkLine className=' text-light-300 max-[390px]: text-xl' /></a>

                <div className="relative">
                    <ImSphere className=' absolute mt-3 ml-2' />
                    <select
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        className="block appearance-none w-20 bg-white border border-gray-400 hover:border-gray-500  pl-8 py-2 pr-4 rounded shadow leading-tight focus:outline-none focus:shadow-outline font-semibold"
                    >



                        <option value="English">EN</option>
                        <option value="Spanish">SP</option>
                        <option value="French">FR</option>
                        <option value="German">GE</option>

                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">

                        <IoMdArrowDropdown className=' text-xl' />
                    </div>
                </div>



            </div>

        </div>
    )
}

export default Navbar