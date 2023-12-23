import React from 'react'
import TwoBhk from '../assets/Interior1.jpg'
import ThreeBhk from '../assets/THreebhk.jpeg'
import FamilyHouse from '../assets/Nhside.png'

const NewsEvent = () => {
    const details=[
        {
            id:1,
            src:TwoBhk,
            date:"Jun 5, 2023",
            title:'Welcoming Wilcox!',
            style:'shadow-gray-500'
        },
        {
            id:2,
            src:ThreeBhk,
            date:"Jun 5, 2023",
            title:'Home is the starting place of love, hope and dreams',
            style:'shadow-gray-500'
        },
        {
            id:3,
            src:FamilyHouse,
            date:"Jun 5, 2023",
            title:'“Home is the dearest spot on earth, and it should be the centre, though not the boundary, of the affections.”',
            style:'shadow-gray-500'
        },
        // {
        //     id:4,
        //     src:House2,
        //     date:"Jun 5, 2023",
        //     title:'“Home is the dearest spot on earth, and it should be the centre, though not the boundary, of the affections.” ',
        //     style:'shadow-gray-500'
        // }
        
    ]
  return (
    <div name="housefeature" className=' bg-gradient-to-b from-black to-gray-800 w-full h-auto'>
    <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div className=' flex justify-center items-center '>
            <p className=' font-bold border-b-4 inline border-cyan-300 p-2 text-sm md:text-4xl'>NEWS & EVENTS</p>
            
        </div>
        <div className='  w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-start py-8 px-12 sm:px-0 '>

            {
                details.map(({id,src,title,style,date})=>(
                    <div key={id} className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className=' w-full h-auto'/>
                <p className='mt-2 m-2 text-gray-500 text-sm'>{date}</p>
                <p className='mt-4 m-2 text-gray-300 line-clamp-3'>{title}</p>
            </div>
                ))
            }
        </div>
    </div>
</div>
  )
}

export default NewsEvent