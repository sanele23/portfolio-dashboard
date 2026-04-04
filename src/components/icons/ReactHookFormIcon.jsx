// ReactHookFormIcon.jsx
// React Hook Form logo SVG as a React component
export default function ReactHookFormIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="16" cy="16" r="16" fill="#EC5990" />
      <path
        d="M10 22c2-4 10-4 12 0"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="14" r="4" fill="#fff" />
      <circle cx="16" cy="14" r="2" fill="#EC5990" />
    </svg>
  );
}
