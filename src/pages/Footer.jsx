import FooterTop from "../components/FooterTop";
import Logo_2 from "../assets/icons/Logo-2.svg";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi"; // Globe icon for website
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
    return (
    <>
    <FooterTop />
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left Section - Logo & About */}
            <div>
              <img src={Logo_2} alt="Nexcent Logo" className="w-[154.49px] h-[24px]" />
              <p className="mt-3 text-gray-400">
                Copyright © 2020 Nexcent ltd.
              </p>
              <p className="mt-2 text-gray-400">
                All rights reserved
              </p>
              {/* Social Media Icons */}
                <div className="mt-4 flex space-x-4">
                <a href="#" className="bg-[#3C464C] text-white p-2 rounded-full hover:bg-gray-500 transition">
                    <FaInstagram size={21} />
                </a>
                <a href="#" className="bg-[#3C464C] text-white p-2 rounded-full hover:bg-gray-500 transition">
                    <FiGlobe size={21} />
                </a>
                <a href="#" className="bg-[#3C464C] text-white p-2 rounded-full hover:bg-gray-500 transition">
                    <FaTwitter size={21} />
                </a>
                <a href="#" className="bg-[#3C464C] text-white p-2 rounded-full hover:bg-gray-500 transition">
                    <FaYoutube size={21} />
                </a>
                </div>
            </div>
  
            {/* Middle Section - Quick Links */}
            <div>
              <h3 className="text-xl font-semibold">Company</h3>
              <ul className="mt-3 space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact us</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Support</h3>
              <ul className="mt-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help center</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of service</a></li>
                <li><a href="#" className="hover:text-white transition">Legal</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy policy</a></li>
                <li><a href="#" className="hover:text-white transition">Status</a></li>
              </ul>
            </div>
            
            <div> 
                <h3 className="text-xl font-semibold">Stay up to date</h3>
                <div className="mt-3 flex items-center bg-gray-700 p-3 rounded-lg">
                    <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-transparent flex-grow outline-none text-white placeholder-gray-400"
                    />
                    <button className="text-white">
                        <FaPaperPlane size={20} />
                    </button>
                </div>
            </div>
          </div>

        </div>
      </footer>
    </>
    );
  };
  
  export default Footer;  