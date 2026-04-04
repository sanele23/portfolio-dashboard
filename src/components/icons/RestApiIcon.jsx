// RestApiIcon.jsx
// RESTful API icon SVG as a React component
export default function RestApiIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect width="32" height="32" rx="8" fill="#4FD1C5" />
      <rect x="8" y="14" width="16" height="4" rx="2" fill="#fff" />
      <rect x="14" y="8" width="4" height="16" rx="2" fill="#fff" />
    </svg>
  );
}
