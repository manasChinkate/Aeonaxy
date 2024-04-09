import React from 'react'
import { AiOutlineSearch, AiOutlineFontSize, AiOutlineMobile } from 'react-icons/ai';
import { MdOutlineSettings, MdOutlineShoppingCart, MdOutlineMenu, MdOutlineMailOutline } from "react-icons/md"
import { TbWorldWww } from "react-icons/tb";
import { FaRegEdit } from "react-icons/fa";
import { LiaFileInvoiceDollarSolid, LiaChartBarSolid } from "react-icons/lia";
import { FaWpforms, FaCode } from "react-icons/fa6";
import { RiSeoLine, RiQuestionMark } from "react-icons/ri";
import { BsQuestionSquare, BsWindowStack, BsLightningCharge, BsQuestionCircleFill } from "react-icons/bs";
import { BiError } from "react-icons/bi";
import { VscError } from "react-icons/vsc";
const Content = () => {

    
        

    const listData = [
        { name: 'Domains', icon: <TbWorldWww /> },
        { name: 'Site Settings', icon: <MdOutlineSettings /> },
        { name: 'Page Editing', icon: <FaRegEdit /> },
        { name: 'Plans and Billing', icon: <LiaFileInvoiceDollarSolid /> },
        { name: 'Data Capture Forms', icon: <FaWpforms /> },
        { name: 'Online store', icon: <MdOutlineShoppingCart /> },
        { name: 'Menu', icon: <MdOutlineMenu /> },
        { name: 'Site Statistics and Goals', icon: <LiaChartBarSolid /> },
        { name: 'Fonts', icon: <AiOutlineFontSize /> },
        { name: 'SEO', icon: <RiSeoLine /> },
        { name: 'Mobile Version', icon: <AiOutlineMobile /> },
        { name: 'General Questions', icon: <BsQuestionSquare /> },
        { name: 'Other Questions', icon: <RiQuestionMark /> },
        { name: 'Multilanding', icon: <BsWindowStack /> },
        { name: 'Email Compaign Builder', icon: <MdOutlineMailOutline /> },
        { name: 'Errors', icon: <BiError /> },
        { name: 'Zero Black', icon: <BsLightningCharge /> },
        { name: 'Custom Code', icon: <FaCode /> },
        { name: 'Possible Problems', icon: <VscError /> },
    ];

    const domains = [
        { name: 'Why do I see a Tilda logo on a grey background when I open my website ?' },
        { name: 'How do I connect a cistom domain?' },
        { name: 'How do I connect multiple domain names to a single Tilda website?' },
        { name: 'How do I create a custom buisness email address?' },
        { name: 'Troubleshooting custom domain errors' },
        { name: 'How do I connect a subdomain to my Tilda website?' },
        { name: 'How do I redirect from HTTP to HTTPS?' },
        { name: 'How do I remove "www" from domain?' },
        { name: 'How do I set up HTTPS/SSL for a subdomain in Tilda ?' },
        { name: 'How do I set up HTTPS/SSL certificate ?' },
        { name: 'How can I speed up (optimize) my Tilda website?' },
    ]




    return (
        <div className=' h-auto  bg-gree w-full'>
            <div className=' h-32  flex justify-center flex-col gap-5 pl-20 max-[390px]:p-4'>
                <h1 className=' text-xl max-[390px]:text-center'>
                    Enter your question
                </h1>
                <div className="relative ">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <AiOutlineSearch className="text-gray-400 text-xl" />
                    </div>
                    <input
                        type="text"
                        placeholder='How do I connect a custom domain ?'
                        className="block appearance-none pl-10   w-5/12 bg-white border border-gray-400 hover:border-gray-500  py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline max-[390px]:w-[350px] "
                    />
                </div>
            </div>

            <div className="  h-auto bg-gree p-8  flex max-[390px]:flex-col max-[390px]:gap-8 ">
                <div className='left bg-gree w-2/5'>
                    {
                        listData.map((item, index) => {
                            return (
                                <div key={index} className=' w-4/5 bg-gree h-10 ml-4 mt-3 flex gap-5 items-center pl-4 cursor-pointer hover:bg-hovering font-semibold max-[390px]:w-[350px]'>
                                    <div className=' text-light-300  text-xl'>{item.icon}</div>
                                    <h2 className=' text-sm'>{item.name}</h2>
                                </div>
                            )
                        })
                    }
                </div>



                <div className='  w-5/6 bg-white p-8 shadow-md rounded max-[390px]:w-[320px] max-[390px]:p-4' >
                    <h2 className='ml-4 font-semibold'>Domains</h2>
                    {domains.map((item, index) => {
                        return (

                            <li className=' ml-4 mt-2 list-none flex items-center gap-2 max-[390px]:text-[12px]  ' key={index}><BsQuestionCircleFill className=' text-yellow-500 max-[390px]:text-[10px]' />{item.name}</li>

                        )
                    })}



                </div>
            </div>

        </div>
    )
}

export default Content