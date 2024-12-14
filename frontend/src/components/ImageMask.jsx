import React, { useState } from 'react';
import { Canvas } from './components/Canvas';
import { ImagePreview } from './components/ImagePreview';
import { Image } from 'lucide-react';

function ImageMask() {
  const [originalImage, setOriginalImage] = useState('');
  const [maskImage, setMaskImage] = useState('');

  const handleMaskGenerated = (original, mask) => {
    if (original) setOriginalImage(original);
    if (mask) setMaskImage(mask);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <Image className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-800">
              Image Inpainting Widget
            </h1>
          </div>

          <Canvas onMaskGenerated={handleMaskGenerated} />
          <ImagePreview originalImage={originalImage} maskImage={maskImage} />
        </div>
      </div>
    </div>
  );
}

export default ImageMask;
