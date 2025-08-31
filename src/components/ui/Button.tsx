interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

function Button({ children, onClick, className, disabled }: ButtonProps) {
  return (
    <div
      className={`flex w-full cursor-pointer items-center justify-center rounded-[14px] bg-[var(--color-primary)] p-3 text-center text-sm font-semibold tracking-widest text-white hover:bg-[var(--color-primary)]/80 md:h-[50px] md:w-fit md:px-10 md:py-0 md:text-[1rem] ${className || ""}`}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </div>
  );
}

export default Button;
