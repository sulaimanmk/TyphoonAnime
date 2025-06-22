
import { Hero } from "@/components/Hero";
import { TrendingAnime } from "@/components/TrendingAnime";
import { GenreSection } from "@/components/GenreSection";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navbar />
      <Hero />
      <TrendingAnime />
      <GenreSection />
    </div>
  );
};

export default Index;
