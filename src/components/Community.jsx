import Logo_1 from "../assets/icons/community/1.svg";
import Logo_2 from "../assets/icons/community/2.svg";
import Logo_3 from "../assets/icons/community/3.svg";
import CommunityCard from "./CommunityCard";

const Community = () => {
    return (
      <section className="relative w-full h-[500px] flex flex-col justify-start items-center bg-white text-[#4D4D4D] text-center pt-10">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl font-bold">Manage your entire community in a single system</h1>
          <p className="mt-2 text-lg text-[#717171]">Who is Nextcent suitable for?</p>
        </div>
        <div className="flex justify-center items-center gap-x-10 mt-6 px-6">
            <CommunityCard 
                icon={Logo_1} 
                title="Membership Organisations" 
                description="Our membership management software provides full automation of membership renewals and payments" 
            />
            <CommunityCard 
                icon={Logo_2} 
                title="National Associations" 
                description="Our membership management software provides full automation of membership renewals and payments" 
            />
            <CommunityCard 
                icon={Logo_3} 
                title="Clubs And Groups" 
                description="Our membership management software provides full automation of membership renewals and payments" 
            />
        </div>
      </section>
    );
  };
  
  export default Community;  