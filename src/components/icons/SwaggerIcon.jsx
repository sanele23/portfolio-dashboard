// SwaggerIcon.jsx
// Swagger logo SVG as a React component
export default function SwaggerIcon({ className = "", ...props }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="16" cy="16" r="16" fill="#85EA2D" />
      <ellipse cx="16" cy="16" rx="10" ry="7" fill="#fff" />
      <ellipse cx="16" cy="16" rx="6" ry="4" fill="#85EA2D" />
      <circle cx="13" cy="16" r="1" fill="#fff" />
      <circle cx="19" cy="16" r="1" fill="#fff" />
    </svg>
  );
}
