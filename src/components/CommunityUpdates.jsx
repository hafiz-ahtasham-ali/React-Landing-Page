import CommunityUpdatesCard from "./CommunityUpdatesCard";
import Image_18 from "../assets/images/image-18.png";
import Image_19 from "../assets/images/image-19.png";
import Image_20 from "../assets/images/image-20.png";

const CommunityUpdates = () => {
  return (
    <section className="bg-white text-[#4D4D4D] py-16">
      <div className="container max-w-[1280px] mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold">Caring is the new marketing</h1>
          <p className="mt-2 text-sm md:text-lg text-[#717171]">
            The Nexcent blog is the best place to read about the latest membership insights, trends, and more. 
            See who's joining the community, read about how our community is increasing their membership income, and lots more.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <CommunityUpdatesCard 
            image={Image_18}
            description="Creating Streamlined Safeguarding Processes with OneRen" 
          />
          <CommunityUpdatesCard 
            image={Image_19}
            description="What are your safeguarding responsibilities and how can you manage them?" 
          />
          <CommunityUpdatesCard 
            image={Image_20}
            description="Revamping the Membership Model with Triathlon Australia" 
          />
        </div>
      </div>
    </section>
  );
};

export default CommunityUpdates;