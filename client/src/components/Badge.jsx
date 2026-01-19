import React from 'react'
import { twMerge } from 'tailwind-merge'
const Badge = ({ title, ClassName}) => {
    console.log(title, ClassName)
  return <button className={twMerge('bg-black/80 text-white py-1 px-4 hover:bg-black rounded-md')}>{title}</button>
  
}

export default Badge