export default function Footer() {
  return (
    <footer className="bg-background border-t border-outline-variant transition-colors relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs font-mono tracking-wide text-google-grey-400 uppercase">
          STATUS_OK // © 2026 Sanele Krakra
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/sanele23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-wider text-google-grey-400 hover:text-white transition-colors uppercase underline underline-offset-4 decoration-outline-variant hover:decoration-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sanele-krakra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono tracking-wider text-google-grey-400 hover:text-white transition-colors uppercase underline underline-offset-4 decoration-outline-variant hover:decoration-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sanele23@live.com"
            className="text-xs font-mono tracking-wider text-google-grey-400 hover:text-white transition-colors uppercase underline underline-offset-4 decoration-outline-variant hover:decoration-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
