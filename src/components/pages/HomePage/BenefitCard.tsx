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
      className={`h-min-[480px] mt-24 w-full overflow-hidden rounded-[50px] p-20 ${cardClassName || ""} `}
      style={{
        background: `url(${bgImageSrc}), ${
          gradientBg ? gradientBg : "var(--color-tertiary)"
        }`,
        backgroundSize: "auto, cover",
        backgroundPosition: "right 0 bottom 0",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-9">
        <h2
          className={`max-w-[758px] text-5xl leading-[72px] font-medium ${titleClassName || ""}`}
        >
          {title}
        </h2>
        <p
          className={`max-w-[540px] text-[22px] leading-9 text-[var(--color-font-secondary)] ${textClassName || ""}`}
        >
          {text}
        </p>
        <Button className="uppercase">{buttonText}</Button>
      </div>
    </section>
  );
}

export default BenefitCard;
