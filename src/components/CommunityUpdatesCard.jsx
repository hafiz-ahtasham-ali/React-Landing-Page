const CommunityUpdatesCard = ({ description }) => {
    return (
      <div className="flex flex-col items-center p-3 bg-[#F5F7FA] shadow-lg rounded-2xl text-center border border-gray-200">
        <p className="text-[16px] mt-2 text-[#717171]">{description}</p>
        <button className="mt-4 text-[#4CAF4F] px-6 py-3 hover:text-[#529463]">
            Readmore
            <span>→</span>
        </button>
      </div>
    );
  };
  
  export default CommunityUpdatesCard;