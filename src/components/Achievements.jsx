const Achievements = ({ title, description, cards }) => {
    return (
      <div className="relative w-full flex flex-col md:flex-row items-center bg-[#F5F7FA] text-[#4D4D4D] pt-10 px-4 md:px-10">
        {/* Left Side - Text Content (Stacks on small screens) */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
          <p className="text-md md:text-lg mt-4 text-gray-600">{description}</p>
        </div>
  
        {/* Right Side - Responsive Grid for Cards */}
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 md:mt-0">
          {cards.map((card, index) => (
            <div key={index} className="flex items-start p-4">
              {/* Icon */}
              <img src={card.icon} alt={card.title} className="w-12 h-12 mr-4" />
  
              {/* Text Content */}
              <div className="flex flex-col">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{card.title}</h3>
                <p className="mt-1 text-sm md:text-md text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Achievements;  