import { type JSX } from "react";
import BackgroundBlobs from "../components/BackgroundBlobs";

function About(): JSX.Element {
  const skills = {
    "Backend Development": [
      {
        name: "Laravel",
        url: "https://laravel.com",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      },
      {
        name: "PHP",
        url: "https://www.php.net",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      },
      {
        name: "Node.js",
        url: "https://nodejs.org",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express",
        url: "https://expressjs.com",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "REST APIs",
        url: "https://restfulapi.net",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      },
    ],
    "Frontend & Mobile": [
      {
        name: "React",
        url: "https://react.dev",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        url: "https://nextjs.org",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Flutter",
        url: "https://flutter.dev",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "Dart",
        url: "https://dart.dev",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      },
    ],
    "Database & DevOps": [
      {
        name: "MySQL",
        url: "https://www.mysql.com",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        url: "https://www.postgresql.org",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        url: "https://www.mongodb.com",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Firebase",
        url: "https://firebase.google.com",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Supabase",
        url: "https://supabase.com",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      },
      {
        name: "Git",
        url: "https://git-scm.com",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
  };

  const achievements = [
    { number: "4+", label: "Years Experience", icon: "⏱️" },
    { number: "20+", label: "Projects Completed", icon: "🚀" },
    { number: "100%", label: "Client Satisfaction", icon: "⭐" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden py-24 text-gray-900 dark:text-white">
      <BackgroundBlobs />

      <div className="relative max-w-6xl mx-auto space-y-24">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Get to know me
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            About{" "}
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I build scalable backend systems, modern web apps, and
            high-performance mobile experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {achievements.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "💻",
              title: "Backend & Mobile",
              text: "Building scalable systems with Laravel and crafting smooth mobile apps using Flutter.",
            },
            {
              icon: "⚡",
              title: "Problem Solver",
              text: "I enjoy tackling complex problems and designing clean architectures.",
            },
            {
              icon: "📚",
              title: "Continuous Growth",
              text: "Always learning new technologies to stay ahead in development.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-purple-600 text-white text-2xl shadow-lg">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="space-y-14">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xl font-semibold text-center mb-6">
                {category}
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
                {items.map((skill) => (
                  <a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center p-5 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-10 h-10 mb-3 group-hover:scale-110 transition"
                    />
                    <span className="text-sm group-hover:text-blue-500">
                      {skill.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-linear-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-200 dark:border-blue-800">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-semibold mb-3">Current Focus</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building SaaS apps and mastering scalable backend systems.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-linear-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-200 dark:border-purple-800">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold mb-3">Vision</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Becoming a full-stack architect creating impactful digital
              products.
            </p>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            ✨ Passionate about AI, modern tech, and continuous growth ✨
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
