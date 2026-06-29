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
    <section className="relative py-16 md:py-20 bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:96px_96px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <ScrollReveal>
          <div className="relative z-10 border border-outline-variant bg-black/35 p-5 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-outline-variant pb-5 mb-7">
              <div className="flex items-end gap-3 md:gap-4">
                <span className="font-mono text-lg md:text-2xl text-google-grey-100 font-bold tracking-widest">
                  05 //
                </span>
                <h2 className="font-headline text-3xl md:text-5xl font-extrabold tracking-tight text-google-grey-50 leading-none uppercase">
                  Contact Node
                </h2>
              </div>

              <div className="inline-flex items-center gap-2 border border-outline-variant px-3 py-2 text-google-grey-400 text-[0.7rem] md:text-xs font-mono uppercase tracking-[0.16em]">
                <span className="w-2 h-2 rounded-full bg-google-grey-300" />
                CHANNEL_READY
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-start">
              <div className="lg:col-span-5 space-y-4">
                <p className="text-google-grey-400 text-base md:text-lg leading-relaxed max-w-md">
                  Currently accepting new projects and consulting opportunities.
                  Reach out and let&apos;s start the conversation.
                </p>

                <div className="flex flex-wrap gap-2">
                  {socialLinks.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-outline-variant px-3 py-2 text-[0.68rem] font-mono uppercase tracking-widest text-google-grey-300 hover:text-google-grey-50 hover:border-google-grey-300 transition-colors"
                      aria-label={label}
                    >
                      <Icon size={14} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 border border-outline-variant bg-background/60 p-4 md:p-5">
                <form onSubmit={handleContact} className="space-y-3">
                  <label className="block text-[0.68rem] font-mono uppercase tracking-widest text-google-grey-500">
                    Email Signal
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="flex-1 h-11 px-3 border border-outline-variant bg-background text-google-grey-100 placeholder:text-google-grey-500 focus:outline-none focus:border-google-grey-300 transition-colors text-sm"
                      aria-label="Your email address"
                    />
                    <button
                      type="submit"
                      className="inline-flex h-11 items-center justify-center gap-2 border border-google-grey-100 text-google-grey-100 px-4 text-xs font-mono uppercase tracking-widest hover:bg-google-grey-100 hover:text-black transition-colors shrink-0"
                    >
                      <Send size={14} />
                      Contact Me
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
