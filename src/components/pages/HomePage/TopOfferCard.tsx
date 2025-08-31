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
      className="flex w-full flex-col gap-9 rounded-[30px] border-2 border-[#DCDCEB] p-3 transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-2xl/8 md:h-[249px] md:flex-row md:px-8 md:py-7"
    >
      <img
        src={imageSrc}
        alt="emlak"
        className="h-48 w-full rounded-[20px] object-cover md:h-full md:w-[158px]"
      />
      <div className="flex w-full flex-col justify-between gap-4">
        <h3 className="text-center text-xl font-semibold md:text-start md:text-[28px]">
          {title}
        </h3>
        <div className="flex flex-col items-center justify-between gap-2 text-[19px] font-medium text-[var(--color-fourth)] md:flex-row">
          <span>{bedrooms} Bedroom</span>
          <span>{area}</span>
          <span>{garages} Garage</span>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 text-[19px] font-medium text-[var(--color-fourth)] md:flex-row">
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
