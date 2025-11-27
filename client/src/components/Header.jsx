import {logo} from "../assets/images/index";
import Container from "./Container";
import SearchInput from "./SearchInput";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { headerNavigation } from "../constant";
import { Link, NavLink } from "react-router-dom"
const Header = () => {
  return (
    <div className="border-b border-slate-300">
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
           <button className="md:hidden text-2xl cursor-pointer text-lightText hover:text-primary hoverEffect">
             <HiOutlineMenu />
           </button>
        </Container>
    </div>
  )
}

export default Header