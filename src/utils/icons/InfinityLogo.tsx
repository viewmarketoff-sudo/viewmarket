import { useId } from "react";

interface InfinityLogoProps {
  className?: string;
  size?: number;
}

export const InfinityLogo = ({
  className = "",
  size = 32,
}: InfinityLogoProps) => {
  const id = useId();
  const gradientId = `infinity-gradient-${id}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="View Market Logo"
      role="img"
    >
      <defs>
        <linearGradient id={gradientId} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="hsl(0, 0%, 95%)" />
          <stop offset="100%" stopColor="hsl(0, 0%, 63%)" />
        </linearGradient>
      </defs>
      <path
        d="M50 38C44 30 36 24 26 24C12 24 4 36 4 50C4 64 12 76 26 76C36 76 44 70 50 62C56 70 64 76 74 76C88 76 96 64 96 50C96 36 88 24 74 24C64 24 56 30 50 38ZM50 54C46 60 40 66 26 66C18 66 14 58 14 50C14 42 18 34 26 34C40 34 46 40 50 46C54 40 60 34 74 34C82 34 86 42 86 50C86 58 82 66 74 66C60 66 54 60 50 54Z"
        fill={`url(#${gradientId})`}
        fillRule="evenodd"
      />
    </svg>
  );
};
