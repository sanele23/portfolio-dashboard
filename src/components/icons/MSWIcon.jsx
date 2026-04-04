// MSWIcon.jsx
// Mock Service Worker (MSW) logo SVG as a React component
export default function MSWIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="16" cy="16" r="16" fill="#F6AD55" />
      <path d="M8 24l8-16 8 16H8z" fill="#fff" />
      <circle cx="16" cy="21" r="2" fill="#F6AD55" />
    </svg>
  );
}
