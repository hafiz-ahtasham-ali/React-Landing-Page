import Logo_1 from "../assets/icons/community/1.svg";
import Logo_2 from "../assets/icons/community/2.svg";
import Logo_3 from "../assets/icons/community/3.svg";
import CommunityCard from "./CommunityCard";

const Community = () => {
  return (
    <section className="relative w-full flex flex-col items-center bg-white text-[#4D4D4D] text-center pt-10 px-4">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold">
          Manage your entire community in a single system
        </h1>
        <p className="mt-2 text-md md:text-lg text-[#717171]">
          Who is Nextcent suitable for?
        </p>
      </div>

      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-full max-w-6xl px-4">
        <CommunityCard 
          icon={Logo_1} 
          title="Membership Organisations" 
          description="Our membership management software provides full automation of membership renewals and payments." 
        />
        <CommunityCard 
          icon={Logo_2} 
          title="National Associations" 
          description="Our membership management software provides full automation of membership renewals and payments." 
        />
        <CommunityCard 
          icon={Logo_3} 
          title="Clubs And Groups" 
          description="Our membership management software provides full automation of membership renewals and payments." 
        />
      </div>
    </section>
  );
};

export default Community;