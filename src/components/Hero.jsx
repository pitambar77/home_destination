import React from 'react'
import Homebg from '../assets/Homevideo.mp4'
import { Link } from 'react-scroll'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
const Hero = () => {
  return (
    <div name='hero' className=' w-full h-screen relative'>
        <video className=' w-full h-full object-cover' src={Homebg} autoPlay loop muted/>
        <div>
                    <Link
                    to='contact'  smooth duration={500}
                     className=' group text-white w-fit py-3 px-6 my-2 -mt-32 ml-8  flex items-center rounded-full hover:bg-gradient-to-b  hover:from-cyan-500 hover:to-blue-500 cursor-pointer absolute z-10 hover:bg-transparent border-2 border-cyan-500 hover:border-cyan-200'>
                    
                        Let's talk
                        <span className='group-hover:rotate-90 duration-300 '>
                        <HiOutlineArrowNarrowRight size={20} className='ml-1'/>
                        </span>
                        
                    </Link>
                </div>
    </div>
  )
}

export default Hero