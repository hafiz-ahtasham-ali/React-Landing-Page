import Logo_1 from "../assets/icons/hero/1.svg";
import Logo_2 from "../assets/icons/hero/2.svg";
import Logo_3 from "../assets/icons/hero/3.svg";
import Logo_4 from "../assets/icons/hero/4.svg";
import Logo_5 from "../assets/icons/hero/5.svg";
import Logo_6 from "../assets/icons/hero/6.svg";
import Logo_7 from "../assets/icons/hero/7.svg";

const logos = [Logo_1, Logo_2, Logo_3, Logo_4, Logo_5, Logo_6, Logo_7];

const Hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-white text-[#4D4D4D] text-center mt-20 mb-20 px-4">
      <div className="max-w-[1280px] w-full flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold">Our Clients</h1>
        <p className="mt-2 text-md md:text-lg text-[#717171]">
          We have been working with some Fortune 500+ clients
        </p>

        {/* Responsive Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 mt-8">
          {logos.map((logo, index) => (
            <img 
              key={index} 
              src={logo} 
              alt={`Logo_${index + 1}`} 
              className="w-12 md:w-16 h-auto mx-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
