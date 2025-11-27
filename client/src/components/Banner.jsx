import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { bannerData } from "../constant/index";

const Banner = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
  };
  return (
    <div className="w-full max-h-[600px]">
        <Slider {...settings}>
         {bannerData?.map((item,index)=> (
            <div key={index}>
                <img src={item?.image} alt="bannerImage"
                 className="h-full w-full object-cover"/>
            </div>
         ))}
        </Slider>
    </div>
  );
}

export default Banner;