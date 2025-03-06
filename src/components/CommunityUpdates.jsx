import CommunityUpdatesCard from "./CommunityUpdatesCard";
import Image_18 from "../assets/images/image-18.png";
import Image_19 from "../assets/images/image-19.png";
import Image_20 from "../assets/images/image-20.png";

const CommunityUpdates = () => {
  return (
    <section className="relative w-full flex flex-col justify-start items-center bg-white text-[#4D4D4D] text-center py-10 px-4">
      <div className="max-w-3xl">
        <h1 className="text-2xl md:text-4xl font-bold">Caring is the new marketing</h1>
        <p className="mt-2 text-sm md:text-lg text-[#717171]">
          The Nexcent blog is the best place to read about the latest membership insights, trends, and more. See who's joining the community, read about how our community is increasing their membership income, and lots more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
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
    </section>
  );
};

export default CommunityUpdates;