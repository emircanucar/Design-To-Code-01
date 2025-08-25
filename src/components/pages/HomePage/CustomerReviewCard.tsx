import StarIcon from "../../Icons/StarIcon";

interface CustomerReviewCardProps {
  starCount: number;
  reviewTitle: string;
  reviewText: string;
  customerName: string;
  customerLocation: string;
  customerImageSrc: string;
}

function CustomerReviewCard({
  starCount,
  reviewTitle,
  reviewText,
  customerName,
  customerLocation,
  customerImageSrc,
}: CustomerReviewCardProps) {
  return (
    <div className="h-full w-full rounded-[10px] border-[1px] border-[#262626]/30 bg-white p-6 md:p-10">
      <div className="flex flex-col gap-[30px]">
        <div className="flex gap-2">
          {Array.from({ length: starCount }).map((_, idx) => (
            <div
              key={idx}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A1A1A]/2"
            >
              <StarIcon />
            </div>
          ))}
        </div>
        <div className="text-[#1d1d1d]">
          <h4 className="line-clamp-1 text-xl font-semibold">{reviewTitle}</h4>
          <p className="mt-2.5 line-clamp-4 h-full min-h-24 font-medium">
            {reviewText}
          </p>
        </div>
        <div className="flex gap-2.5">
          <img
            src={customerImageSrc}
            className="ob h-[50px] w-[50px] rounded-full object-cover"
            alt=""
          />
          <div className="flex flex-col justify-between">
            <span className="font-medium">{customerName}</span>
            <span className="line-clamp-1 text-[#999999]">
              {customerLocation}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviewCard;
