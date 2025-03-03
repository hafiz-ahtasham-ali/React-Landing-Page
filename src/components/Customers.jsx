import Logo_1 from "../assets/icons/customers/1.svg";
import Logo_2 from "../assets/icons/customers/2.svg";
import Logo_3 from "../assets/icons/customers/3.svg";
import Logo_4 from "../assets/icons/customers/4.svg";
import Logo_5 from "../assets/icons/customers/5.svg";
import Logo_6 from "../assets/icons/customers/6.svg";

const logos = [Logo_1, Logo_2, Logo_3, Logo_4, Logo_5, Logo_6];

const Customers = () => {
    return (
      <div className="relative w-full h-[483px] flex justify-start items-center bg-[#F5F7FA] text-[#4D4D4D] pt-10">
        {/* Left Side - Image */}
        <div className="w-1/3 flex justify-center">
          {/* <img src={image} alt={title} className="w-[442px] h-[433px]" /> */}
        </div>
  
        {/* Right Side - Content (Left-Aligned) */}
        <div className="w-2/3 pl-10 text-left">
          {/* <h2 className="text-4xl font-bold text-gray-800">{"title"}</h2> */}
          <p className="text-lg mt-2">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
          <p className="text-lg mt-2">Tim Smith</p>
          <p className="text-lg mt-2">British Dragon Boat Racing Association</p>
          <div className="flex justify-left space-x-15 mt-6">
            {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo_${index + 1}`} className="w-12 h-12" />
            ))}
            <button className="text-[#4CAF4F] px-6 py-3 hover:text-[#529463]">
                Meet all customers
                <span>→</span>
            </button>
        </div>
        </div>
      </div>
    );
  };
  
  export default Customers;