interface PlusIconProps {
  className?: string;
  width?: number;
  height?: number;
}

function PlusIcon({ className, width = 18, height = 18 }: PlusIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        opacity="0.8"
        y="7.5"
        width="18"
        height="3"
        rx="1.5"
        fill="#1B1139"
      />
      <rect
        opacity="0.8"
        x="10.5"
        width="18"
        height="3"
        rx="1.5"
        transform="rotate(90 10.5 0)"
        fill="#1B1139"
      />
    </svg>
  );
}

export default PlusIcon;
