import React from 'react';

const BrushControls = ({ brushSize, setBrushSize }) => {
  return (
    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
      <button
        onClick={() => setBrushSize((prev) => Math.max(1, prev - 5))}
        className="p-1 hover:bg-gray-200 rounded"
      >
        {/* Minus Icon (SVG) */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"></path>
        </svg>
      </button>
      <span className="min-w-[3ch] text-center">{brushSize}</span>
      <button
        onClick={() => setBrushSize((prev) => Math.min(50, prev + 5))}
        className="p-1 hover:bg-gray-200 rounded"
      >
        {/* Plus Icon (SVG) */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14m7-7H5"></path>
        </svg>
      </button>
    </div>
  );
};
export default BrushControls;
