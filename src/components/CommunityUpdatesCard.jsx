const CommunityUpdatesCard = ({ image, description }) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Image Div (Behind) */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full absolute -top-8 z-0">
        <img src={image} alt="title" className="w-full h-full object-cover" />
      </div>

      {/* Text Div (On Top) */}
      <div className="flex flex-col items-center p-5 bg-[#F5F7FA] shadow-lg rounded-2xl text-center border border-gray-200 relative z-10">
        <p className="text-[16px] mt-8 text-[#717171]">{description}</p>
        <button className="mt-4 text-[#4CAF4F] px-6 py-3 hover:text-[#529463]">
          Readmore <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default CommunityUpdatesCard;