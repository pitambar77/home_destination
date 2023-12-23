import React from 'react'
import { FaGithub, FaHome, FaYoutube,FaInstagramSquare, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=' relative  '>
        <div className=' top-0 left-0 w-full overflow-hidden '>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className=' relative block fill-slate-800'></path>
        </svg>
        <div className=' p-8 '>
        <div className=' '>
            <div className=' w-full grid grid-cols-2 sm:grid-cols-6 gap-2 text-center py-8   sm:px-0 text-white text-sm md:items-start  '>
                

                
                <div className='font-semibold cursor-pointer hover:text-red-500'>FIND YOUR NEW HOME</div>
                <div  className='font-semibold cursor-pointer hover:text-red-500'>GALLERIES</div>
                <div  className='font-semibold cursor-pointer hover:text-red-500'>WHY DESTINATION HOMES</div>
                <div  className='font-semibold cursor-pointer hover:text-red-500'>HOME BUYING GUIDE</div>
                <div  className='font-semibold cursor-pointer hover:text-red-500'>CONTACT US</div>
                <div  className='font-semibold cursor-pointer hover:text-red-500'>ACCESSIBILTY</div>
                </div>
                
            </div>
            <div className=' p-10 '>
            <div className=' flex justify-center items-center gap-6  text-white'>
                <h2 className='font-semibold cursor-pointer hover:text-red-500'>Terms</h2>
                <h2  className='font-semibold cursor-pointer hover:text-red-500'>Privacy Policy</h2>
                <h2  className='font-semibold cursor-pointer hover:text-red-500'>Accessibility</h2>
           </div>
            </div>
           <div className='flex justify-center items-center gap-6 p-8'>
            <a className=' text-2xl text-red-500 hover:text-white transition-all duration-150 ease-in-out 'href='FaGithub' ><FaGithub/></a>
            <a className=' text-2xl text-red-500 hover:text-white transition-all duration-150 ease-in-out' href='FaInstagramSquare' ><FaInstagramSquare/></a>
            <a className=' text-2xl text-red-500 hover:text-white transition-all duration-150 ease-in-out'href='FaYoutube' ><FaYoutube/></a>
            <a className=' text-2xl text-red-500 hover:text-white transition-all duration-150 ease-in-out' href='FaTwitter' ><FaTwitter/></a>
           </div>
           
        </div>
        </div>
        <div className=' '>
            <div className='flex justify-between items-center bg-slate-700  w-full p-10 mb-8 md:text-sm text-sm gap-8  '>
                
                <a className=' text-4xl text-white hover:text-red-300 transition-all duration-150 ease-in-out ' href='home'><FaHome/></a>
                <p className='text-gray-400'>©2023 Destination Homes. All Rights Reserved. </p>
                <p className='text-gray-400 font-semibold '> Site ByBuilder Designs.</p>
            </div>
            
           </div>
    </footer>
  )
}

export default Footer