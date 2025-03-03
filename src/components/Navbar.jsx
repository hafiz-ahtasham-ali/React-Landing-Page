import Logo from "../assets/icons/Logo.svg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#F5F7FA] shadow-md p-4 flex items-center justify-between z-50">
      {/* Logo */}
      <img src={Logo} alt="Nexcent Logo" className="w-[154.49px] h-[24px]" />

      {/* Navigation Links - Centered */}
      <ul className="flex space-x-6 text-lg">
        <li><a href="#" className="text-[#18191F] text-3l leading-tight font-semibold">Home</a></li>
        <li><a href="#" className="text-[#18191F] text-3l leading-tight font-semibold">Service</a></li>
        <li><a href="#" className="text-[#18191F] text-3l leading-tight font-semibold">Feature</a></li>
        <li><a href="#" className="text-[#18191F] text-3l leading-tight font-semibold">Product</a></li>
        <li><a href="#" className="text-[#18191F] text-3l leading-tight font-semibold">Testimonial</a></li>
        <li><a href="#" className="text-[#18191F] text-3l leading-tight font-semibold">FAQ</a></li>
      </ul>

      {/* Right Section (Search, Cart, Sign-in Button) */}
      <div className="flex items-center space-x-4">
        <button className="text-[#4CAF4F] px-4 py-2 rounded-lg hover:text-[#529463] transition">
          Login
        </button>
        <button className="bg-[#4CAF4F] text-white px-4 py-2 rounded-lg hover:bg-[#529463] transition">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;