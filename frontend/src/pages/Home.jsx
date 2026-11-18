import Hero from "../components/home/Hero";
import AboutOverview from "../components/home/AboutOverview";
import ImpactStats from "../components/home/ImpactStats";
import FeaturedPrograms from "../components/home/FeaturedPrograms";
import FeaturedProjects from "../components/home/FeaturedProjects";
import SuccessStories from "../components/home/SuccessStories";
import UpcomingEvents from "../components/home/UpcomingEvents";
import Partners from "../components/home/Partners";
import Newsletter from "../components/home/Newsletter";
import CallToAction from "../components/home/CallToAction";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutOverview />
      <ImpactStats />
      <FeaturedPrograms />
      <FeaturedProjects />
      <SuccessStories />
      <UpcomingEvents />
      <Newsletter />
      <Partners />
      
      <CallToAction />

    </>
  );
  
}