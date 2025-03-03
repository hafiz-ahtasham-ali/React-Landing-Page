const Achievements = ({ title, description, cards }) => {
    return (
      <div className="relative w-full h-[290px] flex justify-start items-center bg-[#F5F7FA] text-[#4D4D4D] pt-10">
        {/* Left Side - Text Content */}
        <div className="w-1/2 pr-10 text-left">
            <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
            <p className="text-lg mt-4 text-gray-600">{description}</p>
        </div>

        {/* Right Side - 2x2 Card Grid */}
        <div className="w-1/2 grid grid-cols-2 gap-6">
            {cards.map((card, index) => (
                <div key={index} className="flex items-start p-4">
                    {/* Left Side - Icon */}
                    <img src={card.icon} alt={card.title} className="w-12 h-12 mr-4" />

                    {/* Right Side - Text (Stacked) */}
                    <div className="flex flex-col">
                        <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                        <p className="mt-1 text-gray-600">{card.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Achievements;