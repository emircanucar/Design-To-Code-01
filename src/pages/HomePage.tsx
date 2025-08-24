import Header from "../components/layout/Header";
import HeroSection from "../components/pages/HomePage/HeroSection";
import TopOffers from "../components/pages/HomePage/TopOffers";

function HomePage() {
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection />
      <TopOffers />
    </div>
  );
}

export default HomePage;
