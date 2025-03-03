const Unlock = ({ image, title, description }) => {
    return (
      <div className="relative w-full h-[483px] flex justify-start items-center bg-white text-[#4D4D4D] pt-10">
        {/* Left Side - Image */}
        <div className="w-1/3 flex justify-center">
          <img src={image} alt={title} className="w-[442px] h-[433px]" />
        </div>
  
        {/* Right Side - Content (Left-Aligned) */}
        <div className="w-2/3 pl-10 text-left">
          <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
          <p className="text-lg mt-2">{description}</p>
          <button className="mt-4 bg-[#4CAF4F] text-white px-6 py-3 rounded-lg hover:bg-[#529463] transition">
            Learn More
          </button>
        </div>
      </div>
    );
  };
  
  export default Unlock;  