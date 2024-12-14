import React from 'react';

const ImagePreview = ({ originalImage, maskImage }) => {
  if (!originalImage && !maskImage) return null;

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        Generated Images
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {originalImage && (
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              Original Image
            </h3>
            <img
              src={originalImage}
              alt="Original"
              className="max-w-full h-auto rounded-lg border border-gray-200"
            />
          </div>
        )}
        {maskImage && (
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-medium text-gray-600 mb-2">
              Mask Image
            </h3>
            <img
              src={maskImage}
              alt="Mask"
              className="max-w-full h-auto rounded-lg border border-gray-200"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
