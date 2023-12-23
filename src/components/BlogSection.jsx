import React from 'react'
import house from '../assets/hometown1.jpg'
import hometown from '../assets/hometown2.jpg'
const BlogSection = () => {
  return (
    <>
    <div className='bg-gradient-to-b from-gray-800 to-black   p-12'>
    <div className=' flex justify-center items pb-8 mb-8'>
            <p className=' text-2xl font-bold text-white bg-red-600 rounded-md p-4'> VISIT OUR BLOG </p>
            
        </div>
        <div className=' md:flex mx-auto h-auto items-stretch  '>
            
            <div className=' bg-gray-300  h-auto p-12 w-full shadow-lg rounded-lg overflow-hidden -mr-8 z-0   '>
                <h2 className='  text-gray-600 text-sm  font-semibold md:text-xl'>VISIT OUR</h2>
                <span className=' text-sm font-semibold md:text-2xl'> DESIGN CENTER</span>
                <p className=' mt-4 text-gray-700 line-clamp-3 hover:line-clamp-none sm:line-clamp-10'>Designing an interior space for your new home can be one of the most exciting parts of the building process, or for some, one of the more scary parts of the building process. Either way, to reduce the stress, our designers have systems in place that will help each buyer determine how to make their home fit their personality, style of living, and what upgrades are available in their budget. Our award-winning design center allows visitors to walk through finished kitchen and bath spaces as well as view exterior materials grouped together just as they would on a real home. Designers are available for set appointments and buyers are also able to set up times to review browse options on their own.
                Designing an interior space for your new home can be one of the most exciting parts of the building process, or for some, one of the more scary parts of the building process. Either way, to reduce the stress, our designers have systems in place that will help each buyer determine how to make their home fit their personality, style of living, and what upgrades are available in their budget. Our award-winning design center allows visitors to walk through finished kitchen and bath spaces as well as view exterior materials grouped together just as they would on a real home. Designers are available for set appointments and buyers are also able to set up times to review browse options on their own. </p>
            </div>
            <div className=' w-full h-auto bg-cover bg-center shadow-lg rounded-lg -my-5  '>
                <img className=' w-full h-auto bg-cover bg-center shadow-lg rounded-lg -my-5 ' src={house} alt='house'/>
            </div>
            
            
        
        </div>
        
        <div className='md:flex mx-auto h-auto items-stretch mt-16 '>
            
            <div className=' w-full h-auto bg-cover bg-center shadow-lg rounded-lg -my-5 '>
                <img className=' w-full h-auto bg-cover bg-center shadow-lg rounded-lg -my-5   ' src={hometown} alt='house'/>
            </div>
            <div className=' bg-gray-300 p-12 w-full h-auto shadow-lg rounded-lg overflow-hidden md:-ml-8 z-0'>
                <h2 className=' text-gray-600 font-semibold text-sm md:text-xl'>LEARN ABOUT</h2>
                <span className='    font-semibold text-sm md:text-2xl'> OUR TOWNHOMES</span>
                <p className=' mt-4 text-gray-700 line-clamp-3 hover:line-clamp-none sm:line-clamp-10 '>Designing an interior space for your new home can be one of the most exciting parts of the building process, or for some, one of the more scary parts of the building process. Either way, to reduce the stress, our designers have systems in place that will help each buyer determine how to make their home fit their personality, style of living, and what upgrades are available in their budget. Our award-winning design center allows visitors to walk through finished kitchen and bath spaces as well as view exterior materials grouped together just as they would on a real home. Designers are available for set appointments and buyers are also able to set up times to review browse options on their own. </p>
            </div>
            
        
        </div>
    </div>
    
    
    </>
  )
}

export default BlogSection