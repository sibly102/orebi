import React from 'react'
import { ImSpinner } from "react-icons/im";

const Loader = () => {
  return <div className='text-orange-600 text-5xl flex items-center justify-center flex-col w-full py-40'>
    <ImSpinner className='animate-spin'/>
    <p className='text-lg text-black'>Loading....</p>
  </div>
  
}

export default Loader