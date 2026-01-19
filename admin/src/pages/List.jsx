import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { serverUrl } from '../../confiq';
import Title from '../components/Title';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import PriceFormat from '../components/PriceFormat';
const List = ({token}) => {
   const [list, setList] = useState([]);
   const [loading, setLoading] = useState(false);
   const fetchProductList = async() => {
     try {
       setLoading(false);
       const response = await axios.get(serverUrl + '/api/product/list')
       const data = response?.data
       if(data?.success){
          setList(data?.products);
       }else{
        toast.error(error?.message);
       }
     } catch (error) {
       console.log('Product list fetching Error', error);
       toast.error(error?.message);
     }finally{

     }
   };
   useEffect(()=>{
     fetchProductList();
   }, [])
   const handleRemoveProduct = async(item) => {
    const confirmRemoval = window.confirm(
      `Are you sure to remove this ${item?.name}`
    );
    if(confirmRemoval){
      try {
        setLoading(true)
        const response = await axios.post( serverUrl + '/api/product/remove', 
          {
          _id: item?._id,
        }, 
        {
          headers:{token}
        });
        const data = response?.data
        if(data?.success){
          toast.success(data?.message)
          await fetchProductList();
        }else{
          toast.error(data?.message)
        }
      } catch (error) {
        console.log('Product remove error', error)
        toast.error(error?.message);
      }finally{
        setLoading(false)
      }
    }
   };
  return <div>
    {loading ? 
    (<Loader />) : (<>
      <div className='flex items-center justify-between'>
        <Title>Product List</Title>
        <Link to={'/add'} className='text-sm font-medium hover:text-blue-600 border-2 rounded-md px-1 py-1'> Add Products +</Link>
      </div>
      {list.length > 0 ? (
        <div className='flex flex-col gap-2 mt-2'>
        <div className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr]'>
          <b className='py-1 px-2 border bg-green-600 text-white rounded-md text-center'>Image</b>
          <b className='py-1 px-2 border bg-green-600 text-white rounded-md text-center'>Name</b>
          <b className='py-1 px-2 border bg-green-600 text-white rounded-md text-center hidden md:inline-block'>Caterory</b>
          <b className='py-1 px-2 border bg-green-600 text-white rounded-md text-center'>Price</b>
          <b className='py-1 px-2 border bg-green-600 text-white rounded-md text-center'>Action</b>
          <b className='py-1 px-2 border bg-green-600 text-white rounded-md text-center'>Edit</b>
        </div>
        {list?.map((item)=>(
          <div key={item?._id} className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center text-center bg-amber-400 p-1'>
            <img src={item?.images[0]} alt="productImage" 
            className='w-16 bg-transparent rounded-sm'
            />
            <p>{item?.name}</p>
            <p>{item?.category}</p>
            <PriceFormat amount={item?.price}/>
            <div className='flex justify-center'>
              <IoMdClose onClick={()=> handleRemoveProduct(item)} className='text-lg cursor-pointer'/>
            </div>
            <Link to={'/add'}>Edit</Link>
          </div>
        ))}
      </div>) : <div>
        <p className='mb-4 text-red-600 font-medium tracking-wide'>You have no products in your database</p>
        <Link to={'/add'}>Add Product</Link>
        </div>}
    </>)}
  </div>
  
}

export default List