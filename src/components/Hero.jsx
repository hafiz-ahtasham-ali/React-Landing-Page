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
    <section className="w-full flex flex-col items-center bg-white text-[#4D4D4D] text-center py-12 px-4">
      <div className="max-w-[1280px] w-full mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold">Our Clients</h1>
        <p className="mt-2 text-md md:text-lg text-[#717171]">
          We have been working with some Fortune 500+ clients
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-10">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img 
                src={logo} 
                alt={`Logo_${index + 1}`} 
                className="w-14 md:w-16 h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;