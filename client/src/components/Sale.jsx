import React from 'react'
import { saleImgOne } from "../assets/images";
import { saleImgTwo } from "../assets/images";
import { saleImgThree } from "../assets/images";
import { Link } from "react-router-dom"

const Sale = () => {
  return <div className='w-full h-auto flex items-center justify-between gap-10'>
    <div className='w-full h-full relative group overflow-hidden'>
        <img src={saleImgOne} alt="saleImgOne" className='w-full h-[600px] rounded-md group-hover:scale-110 duration-300 object-cover ease-in-out'/>
        <div className='bg-black/40 text-white w-full h-full absolute left-0 top-0 flex flex-col items-center justify-center gap-2'>
            <p className='font-bold'>10% Sale Ongoing on Phone</p>
            <p>Offers on limited Time</p>
            <Link to={"/shop"} className='py-2 px-3 bg-white/40 rounded-md hover:bg-white/20 duration-300 cursor-pointer'>
              Shop Now
            </Link>
        </div>
        </div>
    <div className='w-full h-auto flex flex-col gap-10'>
       <div className='w-full h-[250px] overflow-hidden relative border-gray-400 group rounded-md'>
          <img src={saleImgTwo} alt="saleImgTwo" className='w-full h-full object-cover group-hover:scale-110 rounded-md duration-300'/>
            <div className='bg-black/40 text-white w-full h-full absolute left-0 top-0 flex flex-col items-start pt-10 pl-10 gap-2'>
            <p className='font-bold'>10% Sale Ongoing on Phone</p>
            <p>Offers on limited Time</p>
            <Link to={"/shop"} className='py-2 px-3 bg-white/40 rounded-md hover:bg-white/20 duration-300 cursor-pointer'>
              Shop Now
            </Link>
        </div>
        </div>
       <div className='w-full h-[250px] overflow-hidden relative border-gray-400 group rounded-md'>
        <img src={saleImgThree} alt="saleImgThree" className='w-full h-full object-cover group-hover:scale-110 duration-300'/>
            <div className='bg-black/40 text-white w-full h-full absolute left-0 top-0 flex flex-col items-start pt-10 pl-10 gap-2'>
            <p className='font-bold'>10% Sale Ongoing on Phone</p>
            <p>Offers on limited Time</p>
            <Link to={"/shop"} className='py-2 px-3 bg-white/40 rounded-md hover:bg-white/20 duration-300 cursor-pointer'>
              Shop Now
            </Link>
        </div>
       </div>
    </div>
  </div>
}

export default Sale