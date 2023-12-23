import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className=' w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white'>
        <div className=' flex flex-col p-4 justify-center  max-w-screen-lg mx-auto h-full'>
            <div className=' pb-8 flex justify-center items-center'>
                <p className=' inline  text-4xl font-bold  border-b-4 border-gray-500'>Contact</p>
                
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/add70ca5-4a40-4037-aaa3-54568e882bbb" method='POST' className=' flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your name' className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                    />
                    <input type="text" name="email" placeholder='Enter your email' className=' p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                    />
                    <textarea name="message"  rows="10"
                    placeholder='Enter your message' className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-6 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact