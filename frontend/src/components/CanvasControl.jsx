import React from "react";
import BrushControls from "./BrushControls";

const CanvasControls = ({
  onUploadClick,
  onClear,
  onExport,
  handleExportMask,
  brushSize,
  setBrushSize,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-4 justify-center sm:justify-start">
      <button
        onClick={onUploadClick}
        className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors w-full sm:w-auto"
      >
        Upload Image
      </button>

      <BrushControls brushSize={brushSize} setBrushSize={setBrushSize} />

      <button
        onClick={onClear}
        className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors w-full sm:w-auto"
      >
        Clear
      </button>

      <button
        onClick={onExport}
        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors w-full sm:w-auto"
      >
        Export Original
      </button>

      <button
        onClick={handleExportMask}
        className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors w-full sm:w-auto"
      >
        Export Mask
      </button>
    </div>
  );
};

export default CanvasControls;
