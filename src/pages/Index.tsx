
import Navbar from "@/components/Navbar";
import FeaturedLeagues from "@/components/FeaturedLeagues";
import LiveMatches from "@/components/LiveMatches";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4">
        <FeaturedLeagues />
        <LiveMatches />
      </main>
    </div>
  );
};

export default Index;
