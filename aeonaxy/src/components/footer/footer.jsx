import React from 'react'
import { FaInstagram ,FaYoutube ,FaFacebookF,FaTwitter    } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' h-auto pb-12  bg-footer max-[390px]:h-[105vh]'>
        <div className=' list-none flex items-center justify-center gap-5  p-14 font-semibold text-sm cursor-pointer'>
            <li>Tilda.cc</li>
            <li>Help Center</li>
            <li>Video Tutorials</li>
            <li>Blog</li>
        </div>

        <div className=' flex item-center justify-center gap-5 mb-4'>
            <div className='rounded-full  flex items-center justify-center h-7 w-7 bg-black text-white'><FaInstagram /></div>
            <div className=' rounded-full flex items-center justify-center h-7 w-7 bg-black text-white'><FaYoutube  /></div>
            <div className='rounded-full flex items-center justify-center h-7 w-7 bg-black text-white'><FaFacebookF /></div>
            <div className='rounded-full flex items-center justify-center h-7 w-7 bg-black text-white '><FaTwitter /></div>
        </div>

        <div className=' flex  items-center justify-evenly  pt-14 max-[390px]:flex-wrap max-[390px]: gap-3 max-[390px]:items-baseline '>
            <div className=' w-64 max-[390px]:w-[150px]'>
                <h2 className=' font-semibold'>Report abuse</h2>
                <p className='w-13  text-light-300 text-sm'>If you believe that any website made on Tilda is violating your rights,file a compliant by
                    filling out this <span className=' text-yellow-500'>form</span>
                </p>
            </div>
            <div className=' w-64 max-[390px]:w-[150px]'>
                <h2 className=' font-semibold'>How to contact our support</h2>
                <p className='w-13  text-light-300 text-sm'> To findout more about this platform features, use the feedback
                form in your Tildaa account, or contact us via email <span className='text-yellow-500'>team@tilda.cc</span>
                   
                </p>
            </div>
            <div className=' w-64 max-[390px]:w-[150px]'>
                <h2 className=' font-semibold'>Accounting docs</h2>
                <p className='w-13  text-light-300 text-sm'>To get the supporting documentation
                and proof of payment, send your request to <span className='text-yellow-500'  > docs@tilda.cc</span>
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Footer