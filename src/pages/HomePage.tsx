import Header from "../components/layout/Header";
import BenefitCard from "../components/pages/HomePage/BenefitCard";
import FeaturesSection from "../components/pages/HomePage/FeaturesSection";
import HeroSection from "../components/pages/HomePage/HeroSection";
import TopOffers from "../components/pages/HomePage/TopOffers";

import benefitBg1 from "../assets/img/benefit/1.png";
import benefitBg2 from "../assets/img/benefit/2.jpg";

function HomePage() {
  return (
    <div className="container mx-auto">
      <Header />
      <HeroSection />
      <TopOffers />
      <FeaturesSection />
      <BenefitCard
        title="We are the best option for your real estate investment"
        text={`Invest in pre-sales with confidence.\nFind projects from verified developers in one place.`}
        buttonText="See Developments"
        bgImageSrc={benefitBg1}
      />
      <BenefitCard
        title="Find your best Real Estate"
        text={`We provide a complete service for the sale, purchase or rental of real estate.`}
        buttonText="Contact Us"
        bgImageSrc={benefitBg2}
        titleClassName="max-w-[364px]!  font-semibold"
        gradientBg="linear-gradient(180deg, #c3dfed 0%, #dff0f7 100%)"
      />
    </div>
  );
}

export default HomePage;
