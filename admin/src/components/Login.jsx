import { useState } from "react";
import { logo } from "../assets/images";
import Title from "./Title";
import toast from 'react-hot-toast';
import axios from 'axios';

const Login = ({ setToken }) => {
  const serverUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(serverUrl)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleAdminLogin = async(event) => {
        event.preventDefault();

        try {
          const response = await axios.post(serverUrl + "/api/user/admin", {
            email,
            password,
          });
          const data = response;
          console.log(data)
        } catch (error) {
          console.log("Login Error", error)
          toast.error(error?.message);
        }
 
    }
  return <div className="flex flex-col justify-center items-center bg-gray-300 min-h-screen gap-2 w-full h-full">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="bg-white min-w-96 shadow-xl rounded-lg p-5">
        <Title className={"text-xl font-bold"}>Admin Panel</Title>
        <form onSubmit={handleAdminLogin} className="flex flex-col gap-4">
            <div className="formInput">
                <p className="text-sm font-bold">Email Address</p>
                <input type="email" 
                required
               
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter Your Email Address" className="border border-gray-400 outline-0 w-full py-1 px-3 rounded-md"
                />
            </div>
            <div className="formInput">
                <p className="text-sm font-bold">Password</p>
                <input type="password" 
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter Your Password" className="border border-gray-400 outline-0 w-full py-1 px-3 mt-1 rounded-md"
                />
            </div>
            <button 
            type="submit"
            className="w-full px-2 py-1 rounded-md bg-black/80 duration-300 text-white hover:bg-black transition-colors cursor-pointer">Login</button>
        
        
      </form>
      </div>
      
    </div>;
  
};

export default Login