import ResourcesHero from "../components/resources/ResourcesHero";
import ResourceOverview from "../components/resources/ResourceOverview";
import ResourceLibrary from "../components/resources/ResourceLibrary";
import FeaturedResources from "../components/resources/FeaturedResources";
import ResourcesCTA from "../components/resources/ResourcesCTA";
export default function Resources() {
  return (
    <main>
      <ResourcesHero />
      <ResourceOverview />
      <ResourceLibrary />
      <FeaturedResources />
      <ResourcesCTA />
    </main>
  );
}