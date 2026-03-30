function Badge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-blue-900/30 backdrop-blur-sm border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm mb-5 font-medium shadow-sm hover:shadow-md transition-all duration-300">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      ✨ Open to new opportunities & freelance
    </div>
  );
}

export default Badge;