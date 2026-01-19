import React from 'react'

const PriceFormat = ({amount, className}) => {
  const formattedAmount = new Number(amount).toLocaleString('en-US',{
    style:'currency',
    currency:'USD',
    minimumFractionDigits: 2,
  });
  return <span>{formattedAmount}</span>
  
}

export default PriceFormat