import Unlock from "../components/Unlock";
import Achievements from "../components/Achievements";
import Customers from "../components/Customers";
import CommunityUpdates from "../components/CommunityUpdates";
import Image1 from "../assets/icons/unlock-1.svg";
import Image2 from "../assets/icons/unlock-2.svg";
import AchievementsImage1 from "../assets/icons/achievements/1.png";
import AchievementsImage2 from "../assets/icons/achievements/2.png";
import AchievementsImage3 from "../assets/icons/achievements/3.png";
import AchievementsImage4 from "../assets/icons/achievements/4.png";

const achievementsData = [
    { icon: AchievementsImage1, title: "2,245,341", description: "Members" },
    { icon: AchievementsImage2, title: "46,328", description: "Clubs" },
    { icon: AchievementsImage3, title: "828,867", description: "Event Bookings" },
    { icon: AchievementsImage4, title: "1,926,436", description: "Payments" }
  ];

const Body = () => {
    return (
        <>
        <Unlock 
            image={Image1} 
            title="The unseen of spending three years at Pixelgrade" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio." 
          />
        <Achievements title="Helping a local business reinvent itself" description="We reached here with our hard work and dedication" cards={achievementsData} />
        <Unlock 
            image={Image2} 
            title="How to design your site footer like we did" 
            description="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida." 
          />
        <Customers />
        <CommunityUpdates />
        </>
    );
  };

export default Body;