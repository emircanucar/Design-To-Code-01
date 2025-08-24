import TopOfferCard from "./TopOfferCard";
import img1 from "../../../assets/img/topoffers/1.jpg";
import img2 from "../../../assets/img/topoffers/2.jpg";
import img3 from "../../../assets/img/topoffers/3.jpg";
import img4 from "../../../assets/img/topoffers/4.jpg";
import img5 from "../../../assets/img/topoffers/5.jpg";
import img6 from "../../../assets/img/topoffers/6.jpg";

const topOffersData = [
  {
    id: 1,
    imageSrc: img1,
    title: "103/143 West Street, Crows Nest",
    bedrooms: 10,
    area: "150 M",
    garages: 2,
    postedBy: "X Builder",
    price: "$45,545",
  },
  {
    id: 2,
    imageSrc: img2,
    title: "Modern Apartment Downtown",
    bedrooms: 3,
    area: "120 M",
    garages: 1,
    postedBy: "City Properties",
    price: "$32,000",
  },
  {
    id: 3,
    imageSrc: img3,
    title: "Luxury Villa with Garden",
    bedrooms: 5,
    area: "250 M",
    garages: 3,
    postedBy: "Premium Estates",
    price: "$78,900",
  },
  {
    id: 4,
    imageSrc: img4,
    title: "Cozy Family Home",
    bedrooms: 4,
    area: "180 M",
    garages: 2,
    postedBy: "Family Realty",
    price: "$55,200",
  },
  {
    id: 5,
    imageSrc: img5,
    title: "Beachfront Condo",
    bedrooms: 2,
    area: "95 M",
    garages: 1,
    postedBy: "Ocean View Realty",
    price: "$42,800",
  },
  {
    id: 6,
    imageSrc: img6,
    title: "Beachfront Condo",
    bedrooms: 1,
    area: "25 M",
    garages: 0,
    postedBy: "Ocean View Realty",
    price: "$16,800",
  },
];

function TopOffers() {
  return (
    <div className="mt-[110px] px-12">
      {/* Section Header====================================================== */}
      <div className="flex items-center justify-between">
        <h2 className="text-[38px] font-medium">Top Offers</h2>
        <a
          href="#"
          className="text-2xl font-medium text-[var(--color-primary)]"
        >
          See All
        </a>
      </div>

      {/* Cards Container====================================================== */}
      <div className="mt-8 grid grid-cols-1 gap-[30px] md:grid-cols-2">
        {topOffersData.slice(0, 6).map((offer) => (
          <TopOfferCard
            key={offer.id}
            imageSrc={offer.imageSrc}
            title={offer.title}
            bedrooms={offer.bedrooms}
            area={offer.area}
            garages={offer.garages}
            postedBy={offer.postedBy}
            price={offer.price}
          />
        ))}
      </div>
    </div>
  );
}

export default TopOffers;
