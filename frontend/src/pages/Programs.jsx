import ProgramsHero from "../components/programs/ProgramsHero";
import ProgramsOverview from "../components/programs/ProgramsOverview";
import CorePrograms from "../components/programs/CorePrograms";
import FeaturedProgram from "../components/programs/FeaturedProgram";
import ProgramImpact from "../components/programs/ProgramImpact";
import HowToParticipate from "../components/programs/HowToParticipate";
import ProgramStories from "../components/programs/ProgramStories";
import ProgramsCTA from "../components/programs/ProgramsCTA";



export default function Programs() {
  return (
    <main>
      <ProgramsHero />
      <ProgramsOverview />
      <CorePrograms />
      <FeaturedProgram />
      <ProgramImpact />
      <HowToParticipate />
      <ProgramStories />
      <ProgramsCTA />
    </main>
  );
}