// BuilderioIcon.jsx
// Simple Builder.io logo SVG as a React component
export default function BuilderioIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect width="32" height="32" rx="8" fill="#FF61F6" />
      <path
        d="M10 8h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2zm1 4v8h10v-8H11z"
        fill="#fff"
      />
    </svg>
  );
}
