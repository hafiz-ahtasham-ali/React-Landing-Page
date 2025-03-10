const Unlock = ({ image, title, description }) => {
  return (
    <div className="bg-white text-[#4D4D4D] pt-10 px-4">
      <div className="container max-w-[1280px] mx-auto flex flex-col md:flex-row items-center px-6 lg:px-12">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/3 flex justify-center order-1 md:order-none">
          <img src={image} alt={title} className="max-w-full h-auto md:w-[442px] md:h-[433px]" />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-2/3 md:pl-10 text-center md:text-left order-2 md:order-none mt-6 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
          <p className="text-md md:text-lg mt-2">{description}</p>
          <button className="mt-4 bg-[#4CAF4F] text-white px-6 py-3 rounded-lg hover:bg-[#529463] transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unlock;