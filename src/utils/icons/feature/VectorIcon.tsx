export default function VectorIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="vectorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            style={{ stopColor: "hsl(0, 0%, 95%)", stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "hsl(0, 0%, 63%)", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        d="M12.5003 11.9513V22.2367M12.5003 11.9513L21.5752 6.68004M12.5003 11.9513L3.42578 6.68028M3.42578 6.68028V12.988M3.42578 6.68028V6.62625L8.86173 3.46875M21.5756 13.043V6.62625L16.1396 3.46875M18.2267 19.1138L12.5007 22.4398L6.7746 19.1138"
        stroke="url(#vectorGradient)"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
