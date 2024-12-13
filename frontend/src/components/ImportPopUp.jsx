import React from "react";

const ImportPopUp = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col items-center justify-center bg-gray-900 text-white text-2xl w-80 h-72 border border-slate-400 rounded-md relative">
        {/* Cross SVG for dismissal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <svg
          width="65"
          height="65"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#33AC32"
        >
          <path
            fillRule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
        <p>Uploaded Successfully</p>
      </div>
    </div>
  );
};

export default ImportPopUp;
