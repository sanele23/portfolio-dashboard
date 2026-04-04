// ZustandBearIcon.jsx
// Official Zustand bear SVG as a React component

export default function ZustandBearIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="128" cy="128" r="128" fill="#FFB300" />
      <ellipse cx="85" cy="90" rx="25" ry="30" fill="#fff" />
      <ellipse cx="171" cy="90" rx="25" ry="30" fill="#fff" />
      <ellipse cx="85" cy="90" rx="12" ry="15" fill="#000" />
      <ellipse cx="171" cy="90" rx="12" ry="15" fill="#000" />
      <ellipse cx="128" cy="170" rx="40" ry="30" fill="#fff" />
      <ellipse cx="128" cy="170" rx="20" ry="15" fill="#000" />
      <ellipse cx="128" cy="170" rx="8" ry="6" fill="#fff" />
    </svg>
  );
}
