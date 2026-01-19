

import Title from '../components/Title';
import { IoMdAdd, IoMdCloudUpload } from 'react-icons/io';
import { useState } from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Input, { Label } from '../components/ui/Input';
import SmallLoader from '../components/smallLoader';
import toast from 'react-hot-toast';
import axios from 'axios';
import {serverUrl} from '../../confiq.js'
import { useNavigate } from 'react-router-dom';
const Add = ({token}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    _type: '',
    name: '',
    description: '',
    price: '',
    category: '',
    brand: '',
    badge: '',
    discountedPercentage: '',
    isAvailable: true,
    offer: false,
    tags: [],
    image1: null,
    image2: null,
  });
  const navigate = useNavigate();
  const handleImageChange = (e) => {
    const { id, files } = e.target;
    setFormData({
      ...formData,
      [id]: files[0],
    })
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
        setFormData({
          ...formData,
          [name]: checked,
        });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  };
  const handUploadProduct = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if(value instanceof File){
          data.append(key,value);
        }else {
           data.append(key, value);
        }
      });
      const response = await axios.post(serverUrl + '/api/product/add',
        data,{
         headers: {
            token,
            "Content-Type": "multipart/form-data",
         }
        });
        const responseData = await response?.data;
        if(responseData?.success){
          toast.success(responseData?.message)
          navigate('/list')
        }else{
          toast.error(responseData.message);
        }
    } catch (error) {
       console.log('Product data uploading Error', error);
       toast.error(error.message);
    }finally{
      setLoading(false)
    }
  };
  return (
    <form onSubmit={handUploadProduct} className='flex flex-col gap-3 items-start w-full pb-10'>
      <Title>Upload product to Database</Title>
      <div className='flex flex-wrap gap-5 items-center'>
       {['image1', 'image2'].map((imageId)=>(
        <label htmlFor={imageId} key={imageId}>
            <div className='border-dashed border-2 border-gray-500 px-4 py-2 hover:border-black duration-300 cursor-pointer'>
            {formData[imageId] ? (
              <img src={URL.createObjectURL(formData[imageId])} alt="preview" className='w-20 h-20 object-cover mb-2 rounded-md'/>
              ) : (
              <IoMdCloudUpload className='text-5xl'/>
              )}
            <input 
            type="file" hidden id={imageId} 
            onChange={handleImageChange}
            disabled={loading}
            />
            <p>{formData[imageId] ? "change" : "upload"}</p>
          </div>
        </label>
       ))}
      </div>
      <div className='flex flex-col w-full gap-1'>
        <Label htmlFor='name'>Product Name</Label>
        <Input 
        type="text" 
        placeholder="Type product Name ..." name="name"
        onChange={handleChange}
        disabled={loading}
        className="max-w-lg"
        />
      </div>
      <div className='flex flex-col w-full gap-1'>
        <Label htmlFor='description'>Product Description</Label>
        <textarea type='text' placeholder="Type product Description ..." name="description"
        onChange={handleChange}
        rows={4}
        className='border px-4 py-2 border-gray-500 rounded-md max-w-lg'
        />
      </div>
        <div className='flex flex-col w-full gap-1'>
        <Label htmlFor='brand'>Product Brand</Label>
        <Input type="text" 
        placeholder="Type product Brand ..." 
        name="brand"
        onChange={handleChange}
        className="max-w-lg"
        />
      </div>
        <div className='flex flex-col md:flex-row items-center gap-2 md:gap-5'>
        <div className='flex flex-col w-full gap-1'>
        <Label htmlFor='price'>Product Price</Label>
        <Input type="number" 
        placeholder="Enter product Price ..." 
        name="price"
        onChange={handleChange}
        className="max-w-lg"
        />
      </div>
        <div className='flex flex-col w-full gap-1'>
        <Label htmlFor='discount'>Product Discount</Label>
        <Input type="number" 
        placeholder="Enter product Discount ..." 
        name="discount"
        onChange={handleChange}
        className="max-w-lg"
        />
      </div>
      </div>
      <div className='flex flex-col items-center gap-2 md:flex-row md:gap-5'>
        <div className='flex flex-col w-full gap-1'>
        <Label htmlFor='_type'>Product Type</Label>
         <select name="_type" onChange={handleChange} className='border px-4 py-2 border-gray-500 rounded-md max-w-lg appearance-none'>
          <option value="">Select Type</option>
          <option value="New_Arrivals">New Arrivals</option>
          <option value="Best_Sellers">Best Sellers</option>
          <option value="special_Sellers">Special Sellers</option>
          <option value="promotions">Promotions</option>
        </select>
      </div>
        <div className='flex flex-col w-full gap-1'>
        <Label htmlFor='category'>Product category</Label>
         <select name="category" onChange={handleChange} className='border px-4 py-2 border-gray-500 rounded-md max-w-lg appearance-none'>
          <option value="">Select category</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
          <option value="Accessories">Accessories</option>
          <option value="Others">Others</option>
        </select>
      </div>
        <div className='flex flex-col w-full gap-1'>
        <Label htmlFor='offer'>Offer</Label>
         <select name="offer" onChange={handleChange} 
         className='border px-4 py-2 border-gray-500 rounded-md max-w-lg appearance-none'>
          <option value="False">False</option>
          <option value="True">True</option>
        </select>
      </div>
        <div className='flex flex-col w-full gap-1'>
        <Label htmlFor='isAvailable'>Available</Label>
         <select name="isAvailable" onChange={handleChange} 
         className='border px-4 py-2 border-gray-500 rounded-md max-w-lg appearance-none'>
          <option value="True">True</option>
          <option value="False">False</option>
        </select>
      </div>
      </div>
      <div>
        <Label htmlFor="tags">Tags</Label>
        <div className='flex gap-2'>
          {['Fashion', 'Electronics', 'Sports', 'Accessories', 'Others'].map((tag) =>(
            <div key={tag} className='flex items-center'>
              <input type="checkbox" id={tag.toLowerCase()} 
              name='tags' value={tag} className='cursor-pointer'
              onChange={(e) => {
               if(e.target.checked){
                setFormData((prevData) =>({
                  ...prevData,
                  tags: [...prevData.tags, tag],
                }))
               } else{
                setFormData((prevData) =>({
                  ...prevData,
                  tags: prevData.tags.filter((t)=> t !== tag ),
                }))
               }
              }}
              />
              <p>{tag}</p>
            </div>
          ))}
        </div>
      </div>
      <button 
      disabled={loading}
      type='submit' 
      className='bg-black/80 text-white py-2 px-4 
      font-semibold uppercase flex items-center cursor-pointer justify-center gap-1 
      tracking-wide w-44 rounded-md hover:bg-black duration-300 ease-in-out disabled:bg-gray-400 disabled:cursor-not-allowed'
      >Add {loading ? (<SmallLoader />) : (<IoMdAdd className='text-lg' />)}
      </button>
    </form>
  )
}

export default Add;