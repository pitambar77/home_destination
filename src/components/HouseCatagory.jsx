import React from 'react'
import SingleHome from '../assets/Singehome.jpg'
import HomeTown from '../assets/hometown1.jpg'

const HouseCatagory = () => {


    const catagory = [
        {
            id:1,
            src:SingleHome,
            
        },
        {
            id:2,
            src:HomeTown,
            
        }
        
    ]

  return (
    <div name="catagory" className=' bg-gradient-to-b from-black to-gray-800 text-white md:h-screen '>
    <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className=' flex justify-center items pb-8 mt-0'>
            <p className=' text-sm md:text-4xl font-bold '><span className=' text-red-600'>EXCEPTIONAL HOMES, </span>LASTING COMMUNITIES</p>
            
        </div>

        <div className=' grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-0 mt-4'>
        {
            catagory.map(({id,src})=>(
                <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className=' rounded-md duration-200 hover:scale-105' />
                

            </div>
                
            ))
        }
            
        </div>
    </div>
</div>
)
}
export default HouseCatagory