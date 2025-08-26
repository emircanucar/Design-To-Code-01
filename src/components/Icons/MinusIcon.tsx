interface MinusIconProps {
  className?: string;
  width?: number;
  height?: number;
}

function MinusIcon({ className, width = 22, height = 3 }: MinusIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 22 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        opacity="0.8"
        width={width}
        height={height}
        rx="1.5"
        fill="#1DAEFF"
      />
    </svg>
  );
}

export default MinusIcon;
