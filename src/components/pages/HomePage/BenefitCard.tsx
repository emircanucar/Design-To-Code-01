import Button from "../../ui/Button";

interface BenefitCardProps {
  title: string;
  text: string;
  buttonText: string;
  bgImageSrc?: string;
  cardClassName?: string;
  titleClassName?: string;
  textClassName?: string;
  gradientBg?: string;
}

function BenefitCard({
  title,
  text,
  buttonText,
  bgImageSrc,
  cardClassName,
  titleClassName,
  textClassName,
  gradientBg,
}: BenefitCardProps) {
  return (
    <section
      className={`h-min-[480px] mt-12 w-full overflow-hidden rounded-[50px] p-5 md:p-10 lg:mt-24 lg:p-20 ${cardClassName || ""} `}
      style={{
        background: `url(${bgImageSrc}), ${
          gradientBg ? gradientBg : "var(--color-tertiary)"
        }`,
        backgroundSize: "auto, cover",
        backgroundPosition: "right 0 bottom 0",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center gap-9 rounded-[50px] bg-white/80 p-10 text-center backdrop-blur-md lg:items-start lg:bg-transparent lg:p-0 lg:text-start lg:backdrop-blur-none">
        <h2
          className={`text-center text-xl font-medium md:text-3xl lg:max-w-[758px] lg:text-start lg:text-5xl lg:leading-[72px] ${titleClassName || ""}`}
        >
          {title}
        </h2>
        <p
          className={`max-w-[540px] text-[var(--color-font-secondary)] md:text-[22px] md:leading-9 ${textClassName || ""}`}
        >
          {text}
        </p>
        <Button className="uppercase">{buttonText}</Button>
      </div>
    </section>
  );
}

export default BenefitCard;
