import AboutHero from "../components/about/AboutHero";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import LeadershipTabs from "../components/about/LeadershipTabs";
import OurJourney from "../components/about/OurJourney";
import PartnersSponsors from "../components/about/PartnersSponsors";
import NationalCoverage from "../components/about/NationalCoverage";
import CallToAction from "../components/about/CallToAction";



export default function About() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CoreValues />
    
      <LeadershipTabs />
      <OurJourney />
      <PartnersSponsors />
      <NationalCoverage />
      <CallToAction />
    </>
  );
}