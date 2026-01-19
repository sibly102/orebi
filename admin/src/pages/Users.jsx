import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { serverUrl } from "../../confiq";
import Loader from "../components/Loader";
import Title from "../components/Title";
import { FaTrash } from 'react-icons/fa'
import NewUserForm from "../components/NewUserForm";

const Users = ({ token }) => {
      const [userList, setUserList] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [selectedUser, setSelectedUser] = useState(null);
       let [isOpen, setIsOpen] = useState(false)
      const getUserList = async () => {
       try {
        setIsLoading(true);

        if(!token){
          toast.error('Auth token missing. Please login again.');
          setIsLoading(false);
          return;
        }

        const response = await axios.get(serverUrl + "/api/user/users", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = response?.data;
        if(data?.success){
          setUserList(data?.users)
        }else{
          toast.error(data?.message)
        }
       } catch (error) {
         console.log("User list fetching error", error);
         const serverMessage = error?.response?.data?.message;
         toast.error(serverMessage || error?.message || 'Failed to fetch users');
       }finally{
        setIsLoading(false);
       }
      }
      useEffect(() =>{
       getUserList();
      }, [])
      const handleRemoveUser = async (_id) => {
         const confirmRemoval = window.confirm("Are you sure you want to remove this user?");
         if(confirmRemoval){
          setIsLoading(true);
          try {
           const response = await axios.post(serverUrl + "/api/user/remove",{
            _id,
           });
            const data = response?.data;
            if(data?.success){
              toast.success(data?.message);
              await getUserList();
          } else{
            toast.error(data?.message);
          } 
          } catch (error) {
            console.log("Remove user error", error);
            toast.error(error?.message);
         }finally{
          setIsLoading(false);
         }
        }
        };

    const openLoginForm = () => {
        setIsOpen(true);
      }
      const closeLoginForm = () => {
        setIsOpen(false);
      }
  return <div>
    {isLoading ? <Loader /> : (<div>
       <div className="flex items-center justify-between max-w-3xl">
        <Title>Users List</Title>
      <button 
      onClick={openLoginForm}
      className="flex items-center gap-2 bg-black/80 rounded-md py-1 px-2 text-white cursor-pointer">
        Add User
      </button>
       </div>
    </div>)}
    {userList?.length > 0 ? (
        <div className="max-w-3xl flex flex-col gap-2 mt-2">
          <div className="grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr_1fr] gap-4 bg-gray-200 p-2 rounded-md font-semibold">
            <b className="hidden md:inline-block">Name</b>
            <b>Email</b>
            <b>Admin</b>
            <b className="text-center">Action</b>
            <b className="text-center">Edit</b>
          </div>
          {userList?.map((item) =>(
            <div key={item?._id} className="grid grid-cols-[2fr_1fr_1fr] md:grid-cols-[2fr_2fr_1fr_1fr_1fr] gap-4 items-center bg-white p-2 rounded-md">
              <p className="hidden md:inline-block font-semibold">{item.name}</p>
              <p className="font-medium">{item.email}</p>
              <p className="font-medium">{item?.isAdmin ? 'Admin' : 'User'}</p>
              <p className="text-center">
                <FaTrash onClick={()=> handleRemoveUser(item?._id)} className="inline-block text-lg text-black/60 cursor-pointer hover:text-red-300 duration-300 ease-in-out"/>
              </p>
               <button onClick={() => {
                setSelectedUser(null);
                setIsOpen(true);
               }}
                className="text-blue-600 hover:underline cursor-pointer
                 hover:text-green-600 ease-in-out">Edit</button>
            </div>
          ))}
        </div>
      ) : (
      <div className="mt-2">
        <p className="mb-4">No users found</p>
      </div>
    )}
    <NewUserForm 
    isOpen={isOpen} 
    setIsOpen={setIsOpen} 
    close={closeLoginForm} 
    getUserList={getUserList}
    selectedUser={selectedUser}
     />
  </div>
}
export default Users;