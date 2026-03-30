import { type JSX, useState } from "react";
import { Link } from "react-router-dom";

function Projects(): JSX.Element {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = {
    featured: [
      {
        id: 1,
        title: "SaaS Analytics Dashboard",
        description:
          "Real-time analytics dashboard with interactive charts, user management, and detailed insights for business intelligence.",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        tech: ["React", "Node.js", "Tailwind", "Chart.js", "Express"],
        category: "fullstack",
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
      },
      {
        id: 2,
        title: "E-Commerce Platform",
        description:
          "Full-featured online store with cart, payments, admin dashboard, and inventory management.",
        image:
          "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800",
        tech: ["Laravel", "React", "Stripe", "MySQL", "Tailwind"],
        category: "fullstack",
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
      },
      {
        id: 3,
        title: "Mobile Banking App",
        description:
          "Secure mobile banking app with biometric authentication, transaction history, and real-time notifications.",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
        tech: ["Flutter", "Firebase", "Dart", "REST APIs"],
        category: "mobile",
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
      },
    ],
    all: [
      {
        id: 4,
        title: "Task Management System",
        description:
          "Real-time collaborative task management with team features and notifications.",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
        tech: ["React", "Node.js", "MongoDB", "Socket.io"],
        category: "fullstack",
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
      },
      {
        id: 5,
        title: "Portfolio Website",
        description:
          "Modern animated portfolio with dark mode and smooth transitions.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
        tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
        category: "frontend",
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
      },
      {
        id: 6,
        title: "API Gateway",
        description:
          "Scalable API gateway with rate limiting, authentication, and logging.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
        tech: ["Node.js", "Express", "JWT", "Redis"],
        category: "backend",
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
      },
      {
        id: 7,
        title: "Food Delivery App",
        description:
          "Mobile app for food ordering with real-time tracking and payments.",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
        tech: ["Flutter", "Laravel", "Google Maps", "Stripe"],
        category: "mobile",
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
      },
      {
        id: 8,
        title: "Weather Dashboard",
        description:
          "Real-time weather app with forecasts and interactive maps.",
        image:
          "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800",
        tech: ["React", "OpenWeather API", "Chart.js"],
        category: "frontend",
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
      },
      {
        id: 9,
        title: "CMS Platform",
        description:
          "Content management system for blogs with SEO optimization.",
        image:
          "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800",
        tech: ["Laravel", "Vue.js", "PostgreSQL", "Redis"],
        category: "fullstack",
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
      },
    ],
  };

  const filters = [
    { id: "all", label: "All Projects", icon: "🎯" },
    { id: "fullstack", label: "Full Stack", icon: "⚡" },
    { id: "frontend", label: "Frontend", icon: "🎨" },
    { id: "backend", label: "Backend", icon: "⚙️" },
    { id: "mobile", label: "Mobile", icon: "📱" },
  ];

  const displayedProjects =
    filter === "all"
      ? projects.all
      : projects.all.filter((p) => p.category === filter);

  const getCategoryColor = (category: string) => {
    const colors = {
      fullstack: "from-purple-500 to-pink-500",
      frontend: "from-blue-500 to-cyan-500",
      backend: "from-green-500 to-emerald-500",
      mobile: "from-orange-500 to-red-500",
    };
    return (
      colors[category as keyof typeof colors] || "from-gray-500 to-gray-500"
    );
  };

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-linear-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black" />

      <div className="fixed inset-0 -z-5 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(59,130,246,0.1),transparent)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 border border-blue-100 dark:border-blue-900">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            My Portfolio
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Featured{" "}
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Creative Work
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            A showcase of my best projects demonstrating expertise in
            full-stack, mobile, and modern web development.
          </p>
        </div>

        <div className="mb-20">
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-2xl">⭐</span>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Featured Projects
            </h2>
            <span className="text-2xl">⭐</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.featured.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-gray-800 cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  <div
                    className={`absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent transition-all duration-500 ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 translate-y-full group-hover:translate-y-0">
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-200 text-sm line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 text-xs rounded-full bg-white/20 text-white backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3 pt-2">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-4 py-2 rounded-lg bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Live Demo →
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/30 transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-linear-to-r ${getCategoryColor(project.category)} text-white shadow-lg`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                <div
                  className={`relative p-6 transition-all duration-500 ${
                    hoveredProject === project.id ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
              All Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Browse through my complete collection of work
            </p>
          </div>

          <div className="flex justify-center gap-3 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`group px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === f.id
                    ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800"
                }`}
              >
                <span className="mr-1">{f.icon}</span>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {displayedProjects.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div
                    className={`absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent transition-all duration-500 flex items-center justify-center ${
                      hoveredProject === project.id
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  >
                    <div className="text-center p-4 transform transition-transform duration-500">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-200 text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex gap-2 justify-center">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 text-xs bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 text-xs bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-gray-600 dark:text-gray-400">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mb-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your filter to see more projects.
            </p>
          </div>
        )}


        <div className="text-center pt-12 border-t border-gray-200 dark:border-gray-800">
          <div className="bg-linear-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-3">
              Interested in Collaborating?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Let's work together to bring your ideas to life
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/about-me"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
              >
                <span>👤</span>
                Learn More About Me
              </Link>
              <a
                href="https://github.com/mohameddarwish"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-all transform hover:scale-105"
              >
                <span>🐙</span>
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
