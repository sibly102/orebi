import Container from './Container';
import { logo } from '../assets/images';
import { Link } from 'react-router-dom';
const Navbar = ({ token, setToken }) => {
  const handleToken = () => {
    setToken("");
  };
  return (
    <header className='border-b border-b-gray-600 sticky w-full left-0 top-0 z-50 bg-white'>
      <Container className="flex justify-between items-center py-6">
        <div>
         <Link to={'/'}>
            <img src={logo} alt="logo" className='w-20'/>
           <p className='text-xs font-bold uppercase mt-1 tracking-wide text-blue-600'>
            Admin Panel</p>
         </Link>
        </div>
        {token ? (<button onClick={handleToken} className='bg-black/80 text-white py-2 px-3 rounded-xl cursor-pointer'>Logout</button>) : 
        (<button className='bg-black/80 text-white py-2 px-3 rounded-xl cursor-pointer'>Login</button>)}
      </Container>
    </header>
  )
}

export default Navbar