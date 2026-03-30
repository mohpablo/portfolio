import { Link } from "react-router-dom";
import { useState, useEffect, useRef, type JSX } from "react";
import type { CvOption, Tech } from "../types/hero";
import Badge from "./Badge";
import TechBadge from "./TechBadge";
import CVDropdown from "./CVDropdown";
import BackgroundBlobs from "./BackgroundBlobs";

function Hero(): JSX.Element {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);

  const cvOptions: CvOption[] = [
    { label: "Fullstack CV", file: "/cv/mohamed-darwish-cv-fullstack.pdf" },
    { label: "Flutter CV", file: "/cv/mohamed-darwish-cv-flutter.pdf" },
    { label: "Laravel CV", file: "/cv/mohamed-darwish-cv-laravel.pdf" },
  ];

  const techs: Tech[] = [
    { name: "React", color: "text-blue-600 dark:text-blue-400" },
    { name: "TypeScript", color: "text-blue-600 dark:text-blue-400" },
    { name: "Node.js", color: "text-green-600 dark:text-green-400" },
    { name: "Express", color: "text-gray-600 dark:text-gray-400" },
    { name: "Laravel", color: "text-red-600 dark:text-red-400" },
    { name: "Flutter", color: "text-sky-600 dark:text-sky-400" },
    { name: "Tailwind", color: "text-cyan-600 dark:text-cyan-400" },
    { name: "Python", color: "text-yellow-600 dark:text-yellow-500" },
  ];

  const handleDownloadCV = (file: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop() ?? "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCvDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCvDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden">
      <BackgroundBlobs />

      <div className="relative max-w-4xl mx-auto text-center py-12 sm:py-16">
        <Badge />

        {/* Name & Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-3 drop-shadow-sm">
          <span className="bg-linear-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
            Mohamed Darwish
          </span>
        </h1>
        <p className="text-xl sm:text-2xl font-semibold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-8">
          Full Stack & Mobile Developer | Laravel, React & Flutter
        </p>

        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-base sm:text-lg">
          I build modern web and mobile applications with{" "}
          {["React", "Node.js", "Laravel", "Flutter"].map((tech) => (
            <span
              key={tech}
              className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              {tech}
              {tech !== "Flutter" ? ", " : "."}
            </span>
          ))}{" "}
          I create seamless experiences, scalable backend systems, and
          interactive UIs for web and mobile.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center mb-10">
          <Link
            to="/projects"
            className="group relative px-6 py-3 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white rounded-lg font-medium shadow-lg transition-all transform hover:scale-105 active:scale-95 overflow-hidden text-center"
          >
            <span className="relative z-10">See My Work</span>
            <div className="absolute inset-0 bg-linear-to-r from-blue-700 to-indigo-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>

          <div className="relative w-full sm:w-auto" ref={dropdownRef}>
            <CVDropdown
              open={cvDropdownOpen}
              setOpen={setCvDropdownOpen}
              options={cvOptions}
              onDownload={handleDownloadCV}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mt-4">
          {techs.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
