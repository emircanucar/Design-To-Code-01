interface ArrowIconProps {
  className?: string;
  width?: number;
  height?: number;
}

function ArrowIcon({ className, width = 13, height = 12 }: ArrowIconProps) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5.89111H12"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.5 1L12 5.89105L6.5 10.7821"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default ArrowIcon;
