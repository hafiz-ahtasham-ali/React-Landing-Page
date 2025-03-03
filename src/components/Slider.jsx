import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Illustration from "../assets/icons/Illustration.svg";

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
    //   autoplay={{ delay: 3000 }}
      className="w-full h-[599px]"
    >
      <SwiperSlide>
        <div className="w-full h-[599px] flex items-center justify-between px-10 bg-[#F5F7FA]">
            {/* Left Side - Text Content */}
            <div className="max-w-l pl-47">
                <h2 className="text-[48px] font-bold text-[#4D4D4D]">Lessons and insights</h2>
                <h2 className="text-[48px] font-bold text-[#4CAF4F]">from 8 years</h2>
                <p className="text-[13px] text-[#717171] mt-2">
                    Where to grow your business as a photographer: site or social media?
                </p>

                {/* Register Button */}
                <button className="mt-4 px-6 py-2 bg-[#4CAF4F] text-white rounded-sm hover:bg-[#529463] transition">
                    Register
                </button>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-start w-[50%] pl-21">
              <img
                src={Illustration}
                alt="Slide 1"
                className="w-[391px] h-[407px] object-contain"
              />
            </div>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://via.placeholder.com/1200x400"
          alt="Slide 2"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://via.placeholder.com/1200x400"
          alt="Slide 3"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;