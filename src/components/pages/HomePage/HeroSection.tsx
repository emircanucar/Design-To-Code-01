import Button from "../../ui/Button";
import HeroSectionStats from "./HeroSectionStats";

function HeroSection() {
  return (
    <div className="hero-section lg:min-h-[736px]">
      <div className="hero-section-bg h-[633.76px] w-full rounded-[50px] px-4 pt-4 md:p-16 md:pt-[114px] lg:px-[89px]">
        <div className="flex w-fit flex-col gap-6 rounded-[50px] bg-white/90 p-6 text-center backdrop-blur-md md:bg-transparent md:p-0 md:text-start md:backdrop-blur-none lg:w-[600px] lg:gap-0">
          <h1 className="text-xl font-medium text-[var(--color-font-primary)] sm:text-2xl md:text-4xl lg:text-[56px]">
            Invierte en preventas de forma segura
          </h1>
          <p className="w-fit text-lg text-[var(--color-font-secondary)] md:w-[480px] md:text-[22px] lg:mt-3.5">
            We provide a complete service for the sale, purchase or rental of
            real estate.
          </p>
          <Button className="uppercase md:px-[51px] lg:mt-14">
            See developments
          </Button>
        </div>
        <HeroSectionStats />
      </div>
    </div>
  );
}

export default HeroSection;
