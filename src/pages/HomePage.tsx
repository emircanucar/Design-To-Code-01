import Header from "../components/layout/Header";
import FeaturesSection from "../components/pages/HomePage/FeaturesSection";
import HeroSection from "../components/pages/HomePage/HeroSection";
import TopOffers from "../components/pages/HomePage/TopOffers";

function HomePage() {
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection />
      <TopOffers />
      {<FeaturesSection />}
    </div>
  );
}

export default HomePage;
