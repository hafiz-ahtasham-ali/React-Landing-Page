const CommunityCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 md:p-8 bg-white shadow-lg rounded-2xl text-center border border-gray-200">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
        <img src={icon} alt={title} className="w-12 h-12 object-contain" />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-[#4D4D4D]">
        {title}
      </h3>
      <p className="text-sm md:text-base mt-2 text-[#717171]">
        {description}
      </p>
    </div>
  );
};

export default CommunityCard;