import Image_1 from "../assets/images/1.png";
import Logo_1 from "../assets/icons/customers/1.svg";
import Logo_2 from "../assets/icons/customers/2.svg";
import Logo_3 from "../assets/icons/customers/3.svg";
import Logo_4 from "../assets/icons/customers/4.svg";
import Logo_5 from "../assets/icons/customers/5.svg";
import Logo_6 from "../assets/icons/customers/6.svg";

const logos = [Logo_1, Logo_2, Logo_3, Logo_4, Logo_5, Logo_6];

const Customers = () => {
  return (
    <div className="relative w-full flex flex-col md:flex-row items-center bg-[#F5F7FA] text-[#4D4D4D] pt-10 px-4 md:px-10">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <img src={Image_1} alt={"title"} className="w-full max-w-[442px] h-auto" />
      </div>

      {/* Right Side - Content (Stacks on mobile) */}
      <div className="w-full md:w-2/3 md:pl-10 text-center md:text-left mt-6 md:mt-0">
        <p className="text-[#717171] text-md md:text-lg">
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
        </p>
        <p className="text-[#4CAF4F] text-md md:text-lg mt-2 font-semibold">Tim Smith</p>
        <p className="text-[#89939E] text-md md:text-lg mt-2">British Dragon Boat Racing Association</p>

        {/* Logos - Wraps on mobile */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-6">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo_${index + 1}`} className="w-10 h-10 md:w-12 md:h-12" />
          ))}
          <button className="text-[#4CAF4F] font-bold hover:text-[#529463] flex items-center mt-4 md:mt-0">
            Meet all customers <span className="ml-2">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customers;