import {logo} from "../assets/images/index";
import Container from "./Container";
import SearchInput from "./SearchInput";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { headerNavigation } from "../constant";
import { Link, NavLink } from "react-router-dom"
import { Dialog, DialogPanel } from '@headlessui/react';
import { useState } from "react";
import Title from "./Title";
import { IoCloseOutline } from "react-icons/io5";
import SocialLinks from "../components/SocialLinks"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }
  return (
    <div className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <Container className="py-7 flex justify-between gap-x-3">
            <Link to={"/"}>
            <img src={logo} alt="log" />
            </Link>
           <SearchInput />
           <div className="hidden md:inline-flex items-center gap-5 lg:gap-7
           text-sm uppercase font-medium text-lightText
           ">
             {
              headerNavigation?.map((item) =>(
                <NavLink 
                key={item?.title} 
                to={item?.link}
                className="hover:text-primary hoverEffect cursor-pointer relative group overflow-hidden">
                  {item?.title}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 inline-block bg-primary -translate-x-[110%] group-hover:translate-x-0 hoverEffect" />
                  </NavLink>
              ))
             }
              <Link to={"/cart"} className="text-2xl hover:text-primary hoverEffect cursor-pointer 
              relative group">
                 <IoMdCart />
                 <span className="hover:text-lightText bg-lightText absolute -right-2 -top-1 w-3.5 h-3.5 group-hover:bg-primary rounded-full text-white text-xs flex items-center justify-center group">
                  2
                  </span>
             </Link>
             <Link to={"/signin"} className="text-xl hoverEffect:text-primary cursor-pointer">
               <FaUserAlt />
             </Link>
           </div>
           <button 
           onClick={open}
           className="md:hidden text-2xl cursor-pointer text-lightText hover:text-primary hoverEffect">
             <HiOutlineMenu />
           </button>
           {/*Dialog*/}
           <Dialog open={isOpen} 
           className="relative z-10 md:hidden" onClose={close}>
        <div className="fixed inset-0 z-50 w-screen items-center justify-center p-4 bg-black/90">
            <DialogPanel
              transition
              className="w-[94%] space-y-4 bg-primary p-6 border border-lightText rounded-md top-25 h-[80%] absolute"
            >
             <div className="flex items-center justify-between">
              <Title className="text-white text-xl">Navigation Menu</Title>
              <button className="text-white/40 text-2xl cursor-pointer hover:bg-red-600 duration-300 border border-white/20 rounded-sm hover:border-white/40">
                <IoCloseOutline onClick={() =>setIsOpen(false)}/>
              </button>
             </div>
             <div className="flex flex-col justify-center gap-5 pt-5">
              {headerNavigation.map((item, index) =>(
                <NavLink key={index} 
                onClick={() => setIsOpen(false)}
                to={item?.link}
                className="text-white hover:text-white duration-300 relative group flex items-center gap-2"
                >
                  
                  <span className="w-2.5 h-2.5 border duration-300 border-white/80 rounded-full inline-flex group-hover:border-white"/>
                  {item?.title}
                 <span className="absolute w-full h-px left-0 border -bottom-1 duration-300  border-white/20 rounded-full inline-flex group-hover:border-white" />
                </NavLink>
              ))}
              <NavLink
              onClick={() => setIsOpen(false)}
              to={"/signin"}
              className="text-white hover:text-white duration-300 relative group flex items-center gap-2"
              >
                <span className="w-2.5 h-2.5 border duration-300 border-white/80 rounded-full inline-flex group-hover:border-white"/>
                Signin
                <span className="absolute w-full h-px left-0 border -bottom-1 duration-300  border-white/20 rounded-full inline-flex group-hover:border-white" />
              </NavLink>
              <SocialLinks />
             </div>
            </DialogPanel>
        </div>
      </Dialog>
        </Container> 
    </div>
  )
}

export default Header