import Container from './Container'
import Title from '../components/Title'
import SocialLinks from './SocialLinks'
import { Link } from 'react-router-dom';
import { paymentCard } from '../assets/images';

const shopArray = [
  { title: "Accessories", link: "/accessories" },
  { title: "Cloths", link: "/cloths" },
  { title: "Electronics", link: "/shop" },
  { title: "Home Appliences", link: "/shop" },
  { title: "New Arrivals", link: "/shop" },
];
const accountArray = [
  { title: "Profile", link: "/profile" },
  { title: "Orders", link: "/orders" },
  { title: "Address", link: "/address" },
  { title: "Account Details", link: "/profile" },
  { title: "Privacy", link: "/privacy" },
];

const Footer = () => {
  return (
    <div className='w-full bg-[#1b1b1b] py-20 text-white/80'>
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        <div className='col-span-2'>
          <div className='flex flex-col gap-6'>
            <Title className="text-xl">More about orebi Shop</Title>
            <p className='text-base w-full lg:w-[80%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
              Enim nisi itaque ipsa eveniet pariatur accusamus?
            </p>
            <SocialLinks />
          </div>
        </div>
        {/* 2nd */}
        <div>
          <div className='flex flex-col gap-2 mb-3'>
            <Title className="text-xl">Shop</Title>
            {shopArray?.map((item, index)=>(
              <Link key={item?.index} to={item?.link} 
              className='text-base text-lightText hover:text-white hover:underline decoration-1 decoration-gray-500
              underline-offset-2 cursor-pointer duration-300
              '>
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        {/* 3rd */}
                <div>
          <div className='flex flex-col gap-2 mb-3'>
            <Title className="text-xl">Your Account</Title>
            {accountArray?.map((item, index)=>(
              <Link key={item?.index} to={item?.link} 
              className='text-base text-lightText hover:text-white hover:underline decoration-1 decoration-gray-500
              underline-offset-2 cursor-pointer duration-300
              '>
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        {/* Fourth */}
        <div className='col-span-2 flex flex-col items-center w-full'>
           <Title className="text-xl mb-6">Subcribe to our NewsLetter.</Title>
           <div>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className='flex items-center gap-2'>
              <input type="text" placeholder='insert your email...' 
              className='h-12 w-full border-b border-gray-400 bg-transparent px-4 outline-none text-sm placeholder:text-base placeholder:text-white text-white'/>
              <button className='px-3 py-2 bg-primary/70 border border-transparent hover:border-gray-500 duration-300 rounded-md outline-none cursor-pointer'>Subcribe</button>
            </div>
           </div>
           <img src={paymentCard} alt="" className='mt-3'/>
        </div>
      </Container>
    </div>
  )
}

export default Footer