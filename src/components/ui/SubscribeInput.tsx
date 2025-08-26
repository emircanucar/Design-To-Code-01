import ArrowIcon from "../Icons/ArrowIcon";

function SubscribeInput() {
  return (
    <div className="relative w-fit">
      <input
        className="h-[54px] w-72 min-w-60 rounded-2xl border-2 border-[#D0D0E3] p-4 text-sm"
        placeholder="Email Address"
        type="email"
        name="subscribe-input"
        id=""
      />
      <button className="absolute top-1/2 right-3 flex h-[34px] w-[34px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[var(--color-primary)] transition-all hover:-rotate-12">
        <ArrowIcon />
      </button>
    </div>
  );
}

export default SubscribeInput;
