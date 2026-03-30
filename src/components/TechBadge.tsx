import type { Tech } from "../types/hero";

function TechBadge({ tech }: { tech: Tech }) {
  return (
    <span
      className={`px-3 py-1.5 text-sm font-medium ${tech.color} bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 cursor-default border border-gray-200/50 dark:border-gray-700/50`}
    >
      {tech.name}
    </span>
  );
}

export default TechBadge;