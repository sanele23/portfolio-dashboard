export default function Footer() {
  return (
    <footer className="bg-google-grey-50 dark:bg-google-grey-900 border-t border-google-grey-200 dark:border-google-grey-800 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-google-grey-500 dark:text-google-grey-400">
          © 2026 Sanele Krakra. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/sanele23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-google-grey-500 hover:text-google-grey-900 dark:hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sanele-krakra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-google-grey-500 hover:text-google-grey-900 dark:hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sanele23@live.com"
            className="text-sm text-google-grey-500 hover:text-google-grey-900 dark:hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
