interface FacebookIconProps {
  className?: string;
  width?: number;
  height?: number;
}

function FacebookIcon({
  className,
  width = 22,
  height = 22,
}: FacebookIconProps) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1_378)">
        <path
          d="M22 11.0002C22 4.92511 17.0751 0.000244141 11 0.000244141C4.92486 0.000244141 0 4.92511 0 11.0002C0 16.4906 4.02252 21.0414 9.28125 21.8666V14.1799H6.48828V11.0002H9.28125V8.57681C9.28125 5.81993 10.9235 4.29712 13.4361 4.29712C14.6392 4.29712 15.8984 4.51196 15.8984 4.51196V7.219H14.5114C13.145 7.219 12.7188 8.06698 12.7188 8.93775V11.0002H15.7695L15.2818 14.1799H12.7188V21.8666C17.9775 21.0414 22 16.4906 22 11.0002Z"
          fill="#1877F2"
        />
        <path
          d="M15.2818 14.1799L15.7695 11.0002H12.7188V8.93774C12.7188 8.06784 13.145 7.21899 14.5114 7.21899H15.8984V4.51196C15.8984 4.51196 14.6397 4.29712 13.4361 4.29712C10.9235 4.29712 9.28125 5.81993 9.28125 8.57681V11.0002H6.48828V14.1799H9.28125V21.8666C10.4202 22.0448 11.5798 22.0448 12.7188 21.8666V14.1799H15.2818Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_378">
          <rect
            width={width}
            height={height}
            fill="white"
            transform="translate(0 0.000244141)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default FacebookIcon;
