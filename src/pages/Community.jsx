import CommunityStats from "../components/CommunityComps/CommunityStats";
import CommunityHero from "../components/CommunityComps/CommunityHero";
import Stories from "../components/CommunityComps/Stories";
import CommunityCalendar from "../components/CommunityComps/CommunityCalender";
import CommunityCTA from "../components/CommunityComps/CommunityCTA";


const Community = () => {
  return (
    <div className="bg-background text-on-background selection:bg-primary-container selection:text-on-primary">
      <div className="pt-[72px]">
        <CommunityHero />
        <CommunityStats />
        <Stories />
        <CommunityCalendar />
        <CommunityCTA />
      </div>
    </div>
  );
}

export default Community