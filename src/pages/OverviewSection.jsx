import { Linkedin, Github, Mail, MapPin } from "lucide-react";
import { projects, experience, skills } from "../data";
import { getGreeting } from "../utils";
import { ProjectCard } from "../components/ui";
import profileImg from "../assets/profile.jpeg";

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
    label: "Email",
    href: "mailto:sanele23@live.com",
  },
];

export default function OverviewSection() {
  const stats = [
    { label: "Projects", value: projects.length, color: "text-google-blue" },
    { label: "Technologies", value: skills.length, color: "text-google-green" },
    { label: "Years Experience", value: "4+", color: "text-google-yellow" },
    {
      label: "Companies",
      value: experience.filter((e) => e.type === "work").length,
      color: "text-google-red",
    },
  ];

  return (
    <section className="space-y-8">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl md:text-3xl font-semibold text-google-grey-900 mb-1">
          {getGreeting()}, Visitor 👋
        </h1>
        <p className="text-google-grey-600">
          Here&apos;s a snapshot of my portfolio at a glance.
        </p>
      </div>

      {/* Profile Hero Card */}
      <div className="bg-white border border-google-grey-200 rounded-xl p-6 md:p-8 hover:shadow-google-hover transition-shadow">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Profile picture */}
          <img
            src={profileImg}
            alt="Sanele Krakra"
            className="w-28 h-28 rounded-full object-cover shrink-0 shadow-google"
          />

          {/* Bio */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-google-grey-900 tracking-tight">
              Sanele Krakra
            </h2>
            <p className="text-google-blue font-medium text-sm mt-0.5">
              Frontend Developer
            </p>
            <div className="flex items-center justify-center sm:justify-start gap-1 mt-1 text-xs text-google-grey-500">
              <MapPin size={12} />
              <span>Cape Town, South Africa</span>
            </div>

            <p className="mt-4 text-sm text-google-grey-600 leading-relaxed max-w-2xl">
              Frontend Engineer with 4+ years of experience building scalable,
              production-grade web platforms using React, TypeScript, and
              Next.js. Passionate about clean UI/UX design, component-driven
              architecture, and delivering performant interfaces that handle
              complex business logic with clarity and precision.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center sm:justify-start gap-3 mt-5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-google-grey-300 text-sm font-medium text-google-grey-700 hover:border-google-grey-500 hover:text-google-grey-900 hover:shadow-google transition-all"
                  >
                    <Icon size={16} />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-google-grey-500 mb-3">
          Quick Stats
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white border border-google-grey-200 rounded-xl p-5 hover:shadow-google-hover transition-shadow"
            >
              <p className="text-sm text-google-grey-600 mb-1">{s.label}</p>
              <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Projects */}
      <div>
        <h2 className="text-lg font-semibold text-google-grey-900 mb-4">
          Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
