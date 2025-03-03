const CommunityCard = ({ icon, title, description }) => {
    return (
      <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl text-center border border-gray-200">
        <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4">
          <img src={icon} alt={title} className="w-65 h-56" />
        </div>
        <h3 className="text-[24px] font-semibold text-[#4D4D4D]">{title}</h3>
        <p className="text-[16px] mt-2 text-[#717171]">{description}</p>
      </div>
    );
  };
  
  export default CommunityCard;