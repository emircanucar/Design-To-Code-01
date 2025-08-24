interface TopOfferCardProps {
  imageSrc?: string;
  text: string;
  href?: string;
}

function FeatureCard({ imageSrc, text, href }: TopOfferCardProps) {
  return (
    <a
      href={href}
      className="relative block h-[426px] w-full overflow-hidden rounded-[30px] bg-orange-100 select-none"
    >
      <img src={imageSrc} className="h-full w-full object-cover" alt="" />
      <span className="text-stroke-white absolute top-1/2 left-1/2 z-10 w-full -translate-1/2 p-4 text-center text-2xl font-semibold tracking-[0.2em] uppercase">
        {text}
      </span>
    </a>
  );
}

export default FeatureCard;
