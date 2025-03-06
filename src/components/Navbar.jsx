import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import Lucide icons
import Logo from "../assets/icons/Logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full bg-[#F5F7FA] p-4 flex items-center justify-between z-50">
    <div className="container max-w-[1280px] mx-auto flex items-center justify-between px-6 lg:px-12">
      {/* Logo */}
      <img src={Logo} alt="Nexcent Logo" className="w-[154.49px] h-[24px]" />

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-[#18191F] focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Navigation Links */}
      <ul
        className={`lg:flex space-x-11 text-lg absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#F5F7FA] lg:bg-transparent lg:flex-row flex-col items-center transition-transform ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {["Home", "Service", "Feature", "Product", "Testimonial", "FAQ"].map(
          (item) => (
            <li key={item} className="p-2 lg:p-0">
              <a
                href="#"
                className="text-[#18191F] text-lg font-semibold hover:text-[#4CAF4F] transition"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>

      {/* Right Section */}
      <div className="hidden lg:flex items-center space-x-4">
        <button className="text-[#4CAF4F] px-4 py-2 rounded-lg hover:text-[#529463] transition">
          Login
        </button>
        <button className="bg-[#4CAF4F] text-white px-4 py-2 rounded-lg hover:bg-[#529463] transition">
          Sign up
        </button>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;