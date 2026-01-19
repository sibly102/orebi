import React from 'react'
import PriceFormat from '../components/PriceFormat'

const PriceContainer = ({item}) => {
  return <div>
      <PriceFormat amount={item?.price + (item?.discountedPercentage * item?.price)/100} className='text-base font-normal text-lightText line-through'/>
      <PriceFormat amount={item?.price}/>
    </div>
}

export default PriceContainer