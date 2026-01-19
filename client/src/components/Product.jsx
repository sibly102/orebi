import React from 'react'
import Badge from './Badge'
import PriceContainer from './PriceContainer'
import AddToCartButton from './AddToCartButton'
import { Link } from 'react-router-dom'

const Product = ({item}) => {
  return <div className='w-full group pr-2.5 relative'>
        <div className='h-80 border border-gray-300 rounded-tr-md rounded-tl-md relative overflow-hidden'>
            <Link 
            to={`/product/${item?._id}`}
             className='w-full h-full overflow-hidden bg-[#ff3f3]'>
                <img src={item?.images[0]} alt="productImage" 
                className='w-full h-full hover:scale-110 duration-300 cursor-pointer object-cover'
                />
            </Link>
            <div className='absolute top-2 right-2'>
                {!item?.offer && <Badge title='sale' /> }
            </div>
        </div>
        <div className='max-w-91 py-4 flex flex-col gap-1 border-2 border-t-0 border-gray-300 px-5 rounded-b-md'>
            <p className='text-lg text-primary font-bold'>{item?.name}</p>
            <PriceContainer item={item}/>
            <AddToCartButton item={item}/>
        </div>
    </div>
  
}

export default Product