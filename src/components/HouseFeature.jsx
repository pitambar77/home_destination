import React from 'react'
import TwoBhk from '../assets/2bhk.jpg'
import ThreeBhk from '../assets/3bhk.jpg'
import FamilyHouse from '../assets/familyhouse.jpg'
import House2 from '../assets/house2.jpg'
const HouseFeature = () => {

    const details=[
        {
            id:1,
            src:TwoBhk,
            title:'Wilcox Farms Middleton',
            direction:"997 W. 1550 S",
            sub_title:"CLEARFIELD",
            price:"$519,900",
            bed:"3 BEDS",
            bath:"2.5 BATHS",
            space:"3,006 SQFT",
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:ThreeBhk,
            title:'Three Bhk',
            direction:"997 W. 1550 S",
            sub_title:"CLEARFIELD",
            price:"$519,900",
            bed:"3 BEDS",
            bath:"2.5 BATHS",
            space:"3,006 SQFT",
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:FamilyHouse,
            title:'Famil yHouse',
            direction:"997 W. 1550 S",
            sub_title:"CLEARFIELD",
            price:"$519,900",
            bed:"3 BEDS",
            bath:"2.5 BATHS",
            space:"3,006 SQFT",
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:House2,
            title:'Home',
            direction:"997 W. 1550 S",
            sub_title:"CLEARFIELD",
            price:"$519,900",
            bed:"3 BEDS",
            bath:"2.5 BATHS",
            space:"3,006 SQFT",
            style:'shadow-blue-600'
        }
        
    ]

  return (
    <div name="housefeature" className=' bg-gradient-to-b from-gray-800 to-black w-full h-auto'>
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className=' flex justify-center items'>
                <p className=' text-sm md:text-4xl font-bold  p-2'>FEATURED SINGLE FAMILY</p>
                
            </div>
            <div className=' w-full grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    details.map(({id,src,title,style,direction,price,space,bed,bath,sub_title})=>(
                        <div key={id} className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className=' w-full h-auto'/>
                    <div className='  flex justify-between items-center px-4 mt-4 '>
                        <div className=''>
                            <p className=' font-semibold text-gray-400'>{direction}</p>
                            <p className=' font-thin'>{sub_title}</p>
                        </div>
                        
                        <div className=' bg-gray-500 rounded-sm m-2 p-1'>{price}</div>
                    </div>
                    <div className=' flex justify-start items-start'>
                        <p className='  mt-4 text-red-400 font-semibold inline border-b-2 border-t-2 border-gray-800 py-4 px-4 '>{title}</p>
                    </div>
                    
                    <div className=' flex  gap-8 px-4 mt-4'>
                        <div className=' text-gray-300'>{bed}</div>
                        <div className=' text-gray-300'>{bath}</div>
                        <div className=' text-gray-300'>{space}</div>
                    </div>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default HouseFeature