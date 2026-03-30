import type { CvOption } from "../types/hero";

function CVDropdown({
  open,
  setOpen,
  options,
  onDownload,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  options: CvOption[];
  onDownload: (file: string) => void;
}) {
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="w-full sm:w-auto min-w-40 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg font-medium shadow-lg transition-all transform hover:scale-105 active:scale-95 border border-gray-200 dark:border-gray-700 flex items-center justify-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        Download CV
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute mt-2 w-full sm:w-56 bg-white dark:bg-gray-800 shadow-xl rounded-lg py-1 z-10 border border-gray-200 dark:border-gray-700 animate-fadeIn left-0 sm:left-auto">
          {options.map((cv) => (
            <button
              key={cv.label}
              onClick={() => onDownload(cv.file)}
              className="w-full text-left px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                />
              </svg>
              {cv.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export default CVDropdown;