const CommunityUpdatesCard = ({ image, description }) => {
  return (
    <div className="relative flex flex-col items-center w-full max-w-[300px] mx-auto">
      {/* Image */}
      <div className="w-full h-[200px] flex items-center justify-center">
        <img src={image} alt="title" className="w-full h-full object-cover rounded-lg" />
      </div>

      {/* Text Box */}
      <div className="w-full flex flex-col items-center p-5 bg-[#F5F7FA] shadow-lg rounded-2xl text-center border border-gray-200 mt-[-20px] z-10">
        <p className="text-[14px] md:text-[16px] text-[#717171]">{description}</p>
        <button className="mt-4 text-[#4CAF4F] px-6 py-3 hover:text-[#529463]">
          Read more <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default CommunityUpdatesCard;