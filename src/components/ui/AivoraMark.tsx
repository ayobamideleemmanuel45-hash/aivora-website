interface AivoraMarkProps {
  className?: string;
}

export function AivoraMark({ className = 'w-6 h-6' }: AivoraMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="aivora-mark-grad" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect
        x="2"
        y="2"
        width="28"
        height="28"
        rx="7"
        stroke="url(#aivora-mark-grad)"
        strokeWidth="1.75"
        fill="#0B1126"
      />
      <path
        d="M16 7.5L23.5 23.5H19.8L16 14.9L12.2 23.5H8.5L16 7.5Z"
        fill="url(#aivora-mark-grad)"
      />
      <path
        d="M12.8 19.5H19.2"
        stroke="#E2E8F0"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
