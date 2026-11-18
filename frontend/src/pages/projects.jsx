import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsOverview from "../components/projects/ProjectsOverview";
import OngoingProjects from "../components/projects/OngoingProjects";
import CompletedProjects from "../components/projects/CompletedProjects";
import ImpactReports from "../components/projects/ImpactReports";
import ProjectGallery from "../components/projects/ProjectGallery";
import ProjectsCTA from "../components/projects/ProjectsCTA";

export default function Projects() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsOverview />
      <OngoingProjects />
      <CompletedProjects />
      <ImpactReports />
      <ProjectGallery />
      <ProjectsCTA />
    </main>
  );
}