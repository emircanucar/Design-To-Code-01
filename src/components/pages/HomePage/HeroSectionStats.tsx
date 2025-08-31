import LocationIcon from "../../Icons/LocationIcon";
import ServerIcon from "../../Icons/ServerIcon";
import UserIcon from "../../Icons/UserIcon";

function HeroSectionStats() {
  return (
    <div className="mt-6 grid h-fit w-full grid-cols-1 gap-4 rounded-3xl bg-white p-5 shadow-xl/3 md:mt-[69px] md:grid-cols-[1fr_1.2fr_1fr] lg:h-[200px] lg:w-[1140] lg:p-0">
      {/* Col 1 ====================================================== */}
      <div className="flex items-center justify-center">
        <div className="flex gap-9">
          <div className="flex">
            <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[var(--color-primary)]/10">
              <UserIcon />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-2xl font-bold text-[--color-font-primary]">
              90K +
            </span>
            <span className="font text-xl text-[#4f6565]">Investors</span>
          </div>
        </div>
      </div>
      {/* Col 2 ====================================================== */}
      <div className="relative flex items-center justify-center border-y-2 border-[#EEEFF2] py-5 md:border-none lg:p-0">
        <div className="absolute top-1/2 -right-2 bottom-4 hidden h-[125.57px] w-0.5 -translate-y-1/2 bg-[#EEEFF2] md:block"></div>
        <div className="] flex gap-9">
          <div className="flex">
            <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[var(--color-primary)]/10">
              <LocationIcon />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-2xl font-bold text-[--color-font-primary]">
              30 +
            </span>
            <span className="font text-xl text-[#4f6565]">Properties</span>
          </div>
        </div>
        <div className="absolute top-1/2 bottom-4 -left-2 hidden h-[125.57px] w-0.5 -translate-y-1/2 bg-[#EEEFF2] md:block"></div>
      </div>
      {/* Col 3 ====================================================== */}
      <div className="flex items-center justify-center">
        <div className="flex gap-9">
          <div className="flex">
            <div className="flex h-[55px] w-[55px] items-center justify-center rounded-full bg-[var(--color-primary)]/10">
              <ServerIcon />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-2xl font-bold text-[--color-font-primary]">
              5Y +
            </span>
            <span className="font text-xl text-[#4f6565]">Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSectionStats;
