import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const searchInput = () => {
  const [search, setSearch] = useState("")
  return (
    <div className="flex-1 h-10 relative">
      <input type="text" placeholder="Search your product here" 
      className="w-full h-full border border-lightText rounded-full outline-none pl-4 pr-10 text-primary"
      onChange={(e) =>setSearch(e.target.value)}
      value={search}
      />
      {search ? <IoCloseOutline onClick={() => setSearch("")} className="text-lg top-2.5 right-4 absolute hover:text-red-600 cursor-pointer duration-300"/> : 
      <CiSearch className="text-lg top-2.5 right-4 absolute"/>}
    </div>
  )
}

export default searchInput