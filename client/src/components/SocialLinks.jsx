
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const linkData = [
  { icon: <FaGithub />, href: "https://github.com/" },
  { icon: <FaYoutube />, href: "https://www.youtube.com/@reactjsBD" },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/noor-mohammad-ab2245193/",
  },
  { icon: <FaFacebook />, href: "https://www.youtube.com/@reactjsBD" },
  { icon: <FaEnvelope />, href: "https://www.youtube.com/@reactjsBD" },
];
const SocialLinks = () => {
  return (
    <div className="text-xl text-white/50 flex items-center gap-x-2">{linkData?.map((item, index) =>(
        <a key={index} href={item?.href} target="blank" className="border border-white/20 inline-flex p-2 rounded-full
        hover:text-white hover:border-white duration-300 cursor-pointer
        ">{item?.icon}</a>
    ))}</div>
  )
}

export default SocialLinks