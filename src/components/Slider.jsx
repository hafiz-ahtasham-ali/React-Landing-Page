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
      className="w-full h-[450px] md:h-[550px] lg:h-[599px]"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="w-full h-full flex items-center justify-center bg-[#F5F7FA]">
          <div className="max-w-[1280px] w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-12">
            {/* Left Side - Text Content */}
            <div className="w-full md:w-[50%] text-center md:text-left">
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#4D4D4D]">
                Lessons and insights
              </h2>
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#4CAF4F]">
                from 8 years
              </h2>
              <p className="text-[14px] md:text-[16px] text-[#717171] mt-2">
                Where to grow your business as a photographer: site or social media?
              </p>

              {/* Register Button */}
              <button className="mt-4 px-6 py-2 bg-[#4CAF4F] text-white rounded-sm hover:bg-[#529463] transition">
                Register
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center md:justify-end w-full md:w-[50%] mt-6 md:mt-0">
              <img
                src={Illustration}
                alt="Slide 1"
                className="w-[250px] md:w-[320px] lg:w-[391px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="https://via.placeholder.com/1200x400"
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="https://via.placeholder.com/1200x400"
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;