import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { BiSupport } from "react-icons/bi";
import { MdOutlinePayment } from "react-icons/md";
import Container from "./Container";

const services = [
  {
    title: "Free Delivery",
    subtitle: "Free shipping on all orders over $50",
    icon: <TbTruckDelivery />,
    details: {
      description:
        "Enjoy free standard shipping on all orders over $50. We partner with reliable courier services to ensure your products reach you safely and on time.",
      features: [
        "Free shipping on orders $50+",
        "Standard delivery: 3-5 business days",
        "Express delivery available",
        "Real-time tracking",
        "Secure packaging",
      ],
    },
  },
  {
    title: "Easy Returns",
    subtitle: "30-day return guarantee",
    icon: <HiOutlineCurrencyDollar />,
    details: {
      description:
        "Not satisfied with your purchase? No problem! Our hassle-free return policy allows you to return any item within 30 days of purchase.",
      features: [
        "30-day return window",
        "Full refund guarantee",
        "Free return shipping",
        "Easy online return process",
        "No restocking fees",
      ],
    },
  },
  {
    title: "24/7 Support",
    subtitle: "Expert support anytime",
    icon: <BiSupport />,
    details: {
      description:
        "Our dedicated customer support team is available 24/7 to assist you with any questions, concerns, or issues you may have.",
      features: [
        "Round-the-clock availability",
        "Live chat support",
        "Email and phone support",
        "Expert product guidance",
        "Order tracking assistance",
      ],
    },
  },
  {
    title: "Secure Payment",
    subtitle: "100% secure transactions",
    icon: <MdOutlinePayment />,
    details: {
      description:
        "Shop with confidence knowing that all your transactions are protected by industry-leading security measures and encryption technology.",
      features: [
        "SSL encryption",
        "Multiple payment options",
        "Fraud protection",
        "PCI DSS compliance",
        "Secure checkout process",
      ],
    },
  },
];

const ServicesTag = () => {
  return <div className="bg-[#f4f4f4]">
     <Container className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      {services?.map((item, index) =>(
        <div key={index} className="flex items-center gap-2">
          <span className="text-5xl text-blue-600">{item?.icon}</span>
          <div className="">
            <h3 className="font-base uppercase font-bold">{item?.title}</h3>
            <p className="text-sm font-medium `max-w-[160px]` tracking-wide">{item?.subtitle}</p>
          </div>
        </div>
      ))}
     </Container>
    </div>
  
}

export default ServicesTag