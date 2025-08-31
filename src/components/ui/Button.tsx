interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

function Button({ children, onClick, className, disabled }: ButtonProps) {
  return (
    <div
      className={`flex h-[50px] w-fit cursor-pointer items-center justify-center rounded-[14px] bg-[var(--color-primary)] px-10 font-semibold tracking-widest text-white hover:bg-[var(--color-primary)]/80 ${className || ""}`}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </div>
  );
}

export default Button;
