import CommunityUpdatesCard from "./CommunityUpdatesCard";

const CommunityUpdates = () => {
    return (
      <section className="relative w-full h-[500px] flex flex-col justify-start items-center bg-white text-[#4D4D4D] text-center pt-10">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl font-bold">Caring is the new marketing</h1>
          <p className="mt-2 text-lg text-[#717171]">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
        </div>
        <div className="flex justify-center items-center gap-x-10 mt-6 px-6">
            <CommunityUpdatesCard 
                description="Creating Streamlined Safeguarding Processes with OneRen" 
            />
            <CommunityUpdatesCard 
                description="What are your safeguarding responsibilities and how can you manage them?" 
            />
            <CommunityUpdatesCard 
                description="Revamping the Membership Model with Triathlon Australia" 
            />
        </div>
      </section>
    );
  };
  
  export default CommunityUpdates;