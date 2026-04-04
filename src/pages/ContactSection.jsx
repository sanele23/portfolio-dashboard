import { useState } from "react";
import { Linkedin, Github, Mail, Send } from "lucide-react";
import { ScrollReveal } from "../components/ui";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanele-krakra",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/sanele23",
  },
  {
    icon: Mail,
    label: "Email me directly",
    href: "mailto:sanele23@live.com",
  },
];

export default function ContactSection() {
  const [email, setEmail] = useState("");

  const handleContact = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Let's work together");
    const body = encodeURIComponent(`Hi Sanele,\n\nI came across your portfolio and would love to connect.\n\nMy email: ${email || "(your email here)"}\n\n`);
    window.location.href = `mailto:sanele23@live.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 bg-white dark:bg-google-grey-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-blue-600 to-indigo-700 rounded-3xl p-12 md:p-20 text-center text-white">
            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-300/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
              {/* Label */}
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-200">
                <span className="w-6 h-px bg-blue-300/50" />
                Get In Touch
                <span className="w-6 h-px bg-blue-300/50" />
              </span>

              {/* Heading */}
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Let&apos;s build something{" "}
                <br className="hidden md:block" />
                exceptional together.
              </h2>

              <p className="text-blue-100 text-lg max-w-xl mx-auto leading-relaxed">
                Currently accepting new projects and consulting opportunities.
                Reach out and let&apos;s start the conversation.
              </p>

              {/* Email form */}
              <form
                onSubmit={handleContact}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/15 border border-white/20 placeholder:text-blue-200/70 text-white focus:outline-none focus:ring-2 focus:ring-white/40 transition-all text-sm"
                  aria-label="Your email address"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-xl font-bold text-sm hover:scale-105 active:scale-95 transition-transform shadow-xl shrink-0"
                >
                  <Send size={16} />
                  Contact Me
                </button>
              </form>

              {/* Social icons */}
              <div className="flex justify-center gap-4 pt-2">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-full bg-white/15 hover:bg-white/25 transition-all hover:scale-110 active:scale-95"
                    aria-label={label}
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
