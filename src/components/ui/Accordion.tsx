import { useState } from "react";
import MinusIcon from "../Icons/MinusIcon";
import PlusIcon from "../Icons/PlusIcon";

interface AccordionProps {
  title: string;
  content: string;
  className?: string;
  defaultOpen?: boolean;
}
function Accordion({
  title,
  content,
  className,
  defaultOpen = false,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={` ${className}`}>
      <button
        onClick={toggleOpen}
        className="flex w-full cursor-pointer items-center gap-3 bg-white p-6 shadow-2xl/10 md:gap-6 lg:gap-[34px] lg:p-9"
      >
        <div>{isOpen ? <MinusIcon /> : <PlusIcon />}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </button>
      {isOpen && (
        <div
          className={`cursor-pointer bg-white p-6 shadow-2xl/10 transition-all duration-300 ease-in-out md:p-8 lg:px-[92px] lg:pb-12`}
          onClick={toggleOpen}
        >
          <p className="text-sm leading-6 text-[#363049]">{content}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
