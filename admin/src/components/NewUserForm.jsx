import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { serverUrl } from '../../confiq';


const NewUserForm = ({ 
  isOpen, 
  setIsOpen, 
  close, 
  getUserList, 
  selectedUser }) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });
    useEffect(() =>{
      if(selectedUser){
        setFormData({
          name: selectedUser.name || "",
          email: selectedUser.email || "",
          password: "",
        });
      }else{
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    }, [selectedUser])

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
const handleAddOrUpdateUser = async (e) => {
  e.preventDefault();
    try {
      let response;
      if(selectedUser){
        response = await axios.put(`${serverUrl}/api/user/update/${selectedUser.id}`, formData);
      }else{
        response = await axios.post(`${serverUrl}/api/user/register`, formData);
      }
      const data = response?.data;
      console.log(data);
      if(data?.success){
        toast.success(data?.message || 'User saved successfully');
        setIsOpen(false);
        await getUserList();
      }else{
        toast.error(data?.message || 'Failed to save user');
      }
    } catch (error) {
      console.log("User save error", error);
      toast.error(error?.message || 'Failed to save user');
    }
};
  return (
    <>
    {isOpen && (
        <Dialog 
        open={isOpen} as="div" 
        className="relative z-10 focus:outline-none" 
        onClose={close}
        >
       
          <div>
            <DialogPanel className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
              <DialogTitle className="text-2xl font-bold mb-4 text-center">
                {selectedUser ? 'Edit User' : 'Add New User'}
              </DialogTitle>
              <div className="bg-white rounded-md p-6 w-full max-w-md">
                {/* Form fields go here */}
                <form onSubmit={handleAddOrUpdateUser} className="flex flex-col">
                  <div className="mb-4">
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                      name='name'
                      id='name'
                      type="text"
                      placeholder='Enter Your Name'
                      className="w-full border border-gray-300 rounded-md p-2"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 font-medium">Email</label>
                    <input
                      name='email'
                      id='email'
                      type="email"
                      placeholder='Enter Your Email Address'
                      className="w-full border border-gray-300 rounded-md p-2"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                      name='password'
                      id='password'
                      type="password"
                      placeholder='Enter Your Password'
                      className="w-full border border-gray-300 rounded-md p-2"
                      onChange={handleChange}
                      value={formData.password}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                      />
                      <span>Admin</span>
                    </label>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      onClick={close}
                      className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Save
                    </Button>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      )}
    </>
  )
};
export default NewUserForm;