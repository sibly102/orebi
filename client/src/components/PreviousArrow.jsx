import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";

const PreviousArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className='absolute -left-8 top-1/2 transform -translate-y-1/2 z-50 w-14 h-14 rounded-full text-white bg-black flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors'>
       <FaLongArrowAltLeft size={24} />
    </div>
  )
}

export default PreviousArrow