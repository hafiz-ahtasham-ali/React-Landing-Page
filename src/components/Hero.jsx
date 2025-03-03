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
    <section className="relative w-full h-[210px] flex items-center justify-center bg-white text-[#4D4D4D] text-center mt-20 mb-20">
      <div className="max-w-3xl px-4">
        <h1 className="text-4xl font-bold">Our Clients</h1>
        <p className="mt-2 text-lg text-[#717171]">We have been working with some Fortune 500+ clients</p>
        <div className="flex justify-center items-center space-x-35 mt-16">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo_${index + 1}`} className="w-12 h-12" />
        ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;