import Button from "../../ui/Button";
import HeroSectionStats from "./HeroSectionStats";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-section-bg h-[633.76px] w-full rounded-[50px] px-[89px] pt-[114px]">
        <div className="w-[600px]">
          <h1 className="text-[56px] font-medium text-[var(--color-font-primary)]">
            Invierte en preventas de forma segura
          </h1>
          <p className="mt-3.5 w-[480px] text-[22px] text-[var(--color-font-secondary)]">
            We provide a complete service for the sale, purchase or rental of
            real estate.
          </p>
          <Button className="mt-14 px-[51px] uppercase">
            See developments
          </Button>
        </div>
        <HeroSectionStats />
      </div>
    </div>
  );
}

export default HeroSection;
