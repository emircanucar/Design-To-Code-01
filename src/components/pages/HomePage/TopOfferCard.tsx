interface TopOfferCardProps {
  imageSrc?: string;
  title: string;
  bedrooms: number;
  area: string;
  garages: number;
  postedBy: string;
  price: string;
}

function TopOfferCard({
  imageSrc,
  title,
  bedrooms,
  area,
  garages,
  postedBy,
  price,
}: TopOfferCardProps) {
  return (
    <a
      href="#?"
      className="flex h-[249px] w-full gap-9 rounded-[30px] border-2 border-[#DCDCEB] px-8 py-7 transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-2xl/8"
    >
      <img
        src={imageSrc}
        alt="emlak"
        className="h-full w-[158px] rounded-[20px] object-cover"
      />
      <div className="flex flex-col justify-between">
        <h3 className="text-[28px] font-semibold">{title}</h3>
        <div className="flex items-center justify-between text-[19px] font-medium text-[var(--color-fourth)]">
          <span>{bedrooms} Bedroom</span>
          <span>{area}</span>
          <span>{garages} Garage</span>
        </div>
        <div className="flex items-center justify-between text-[19px] font-medium text-[var(--color-fourth)]">
          <span>Posted by {postedBy}</span>
          <span className="rounded-[10px] bg-[var(--color-fourth)] px-4 py-2 text-white">
            {price}
          </span>
        </div>
      </div>
    </a>
  );
}

export default TopOfferCard;
