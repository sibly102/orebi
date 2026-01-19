import React, { useEffect, useState } from 'react'
import { serverUrl } from '../../confiq';
import axios from 'axios';
import Title from '../components/Title'
import Slider from 'react-slick';
import Product from './Product';
import PreviousArrow from './PreviousArrow';
import NextArrow from './NextArrow';





const NewArrival = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(false);
    useEffect(()=>{
      try {
        setLoading(true)
        const fetchData = async() =>{
            const response = await axios.get( serverUrl + "/api/product/list")
            const data = response?.data;
            if(data?.success){
               setProducts(data?.products);
               setTotal(data?.total);
            }else{
                console.log('error', error)
            }
        };
        fetchData();
      } catch (error) {
        console.log('Product fetching error', error)
      } finally{
        setLoading(false)
      }
    }, []);
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PreviousArrow />,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            nextArrow: <NextArrow />,
            prevArrow: <PreviousArrow />,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            nextArrow: <NextArrow />,
            prevArrow: <PreviousArrow />,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            nextArrow: <NextArrow />,
            prevArrow: <PreviousArrow />,
          },
        },
      ],
  };
  return (
    <div className='w-full py-10'>
      <Title className='mb-5'>New Arrivals</Title>
      <div className='relative overflow-visible px-20'>
        <Slider {...settings}>  
        {products.map((item) =>(
          <Product key={item?._id} item={item} />
        ))}
      </Slider>
      </div>
    </div>
  )
}

export default NewArrival