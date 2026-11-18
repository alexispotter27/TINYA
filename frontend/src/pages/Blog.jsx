import BlogHero from "../components/blog/BlogHero";
import LatestArticles from "../components/blog/LatestArticles";
import BlogCategories from "../components/blog/BlogCategories";
import BlogCTA from "../components/blog/BlogCTA";

export default function Blog() {
  return (
    <main>
      <BlogHero /> 
      <LatestArticles />
      <BlogCategories />
      <BlogCTA />
    </main>
  );
}
