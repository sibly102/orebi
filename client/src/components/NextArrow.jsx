import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className='absolute -right-8 top-1/2 transform -translate-y-1/2 z-50 w-14 h-14 rounded-full text-white bg-black flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors'>
       <FaLongArrowAltRight size={24} />
    </div>
  )
}

export default NextArrow
