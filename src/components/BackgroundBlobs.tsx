function BackgroundBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 - Blue */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-linear-to-r from-blue-400/60 to-indigo-500/60 dark:from-blue-500/10 dark:to-indigo-500/10 rounded-full blur-3xl animate-blob mix-blend-multiply dark:mix-blend-normal" />

      {/* Blob 2 - Teal */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-linear-to-r from-teal-400/60 to-cyan-500/60 dark:from-teal-500/10 dark:to-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-normal" />

      {/* Blob 3 - Purple */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-linear-to-r from-purple-400/60 to-pink-500/60 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-normal" />
    </div>
  );
}

export default BackgroundBlobs;
