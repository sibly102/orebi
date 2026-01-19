import React from 'react'
import toast, { Toaster } from "react-hot-toast";
const AddToCartButton = ({item, className}) => {
  return <button 
  onClick={() =>toast.success(item?.name)}
  className='bg-black/90 text-white'>
     Add To Cart
  </button>
}

export default AddToCartButton