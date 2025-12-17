import { NavLink } from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
import { FaList } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { ImUsers } from "react-icons/im";




const Sidebar = () => {
  return <div className='w-full h-full'>
    <div className='flex flex-col gap-4 mt-2 pl-6'>
     <NavLink to={'/add'} className="flex items-center gap-2 border border-gray-600 border-r-0 bg-gray-100 hover:bg-black/80 hover:text-white duration-300">
      <IoMdAdd className='border border-gray-400 rounded-full mx-1 my-1'/>
      <p>Add Items</p>
     </NavLink>
     <NavLink to={'/list'} className="flex items-center gap-2 border border-gray-600 border-r-0 bg-gray-100 hover:bg-black/80 hover:text-white duration-300">
      <FaList className='border border-gray-400 rounded-full mx-1 my-1'/>
      <p>Product Lists</p>
     </NavLink>
     <NavLink to={'/orders'} className="flex items-center gap-2 border border-gray-600 border-r-0 bg-gray-100 hover:bg-black/80 hover:text-white duration-300">
      <AiFillProduct className='border border-gray-400 rounded-full mx-1 my-1'/>
      <p>Orders</p>
     </NavLink>
     <NavLink to={'/users'} className="flex items-center gap-2 border border-gray-600 border-r-0 bg-gray-100 hover:bg-black/80 hover:text-white duration-300">
      <ImUsers className='border border-gray-400 rounded-full mx-1 my-1'/>
      <p>Users List</p>
     </NavLink>
    </div>
  </div>
}

export default Sidebar