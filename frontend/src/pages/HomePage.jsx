import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Canvas from "../components/Canvas"; // Assuming Canvas component is in the 'components' folder
import ImagePreview from "../components/ImagePreview"; // Assuming ImagePreview is in the 'components' folder

const HomePage = () => {
  const [originalImage, setOriginalImage] = useState("");
  const [maskImage, setMaskImage] = useState("");

  // Function to handle when the mask is generated
  const handleMaskGenerated = (original, mask) => {
    if (original) setOriginalImage(original);
    if (mask) setMaskImage(mask);
  };

  // Function to clear images
  const clearImages = () => {
    setOriginalImage(""); // Clear the original image
    setMaskImage(""); // Clear the mask image
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-grow p-8">
        <div className="bg-[#232231] rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <h1 className="text-2xl font-bold text-[#808080]">
              Image Inpainting Widget
            </h1>
          </div>

          <Canvas onMaskGenerated={handleMaskGenerated} />
          <ImagePreview
            originalImage={originalImage}
            maskImage={maskImage}
            setOriginalImage={setOriginalImage}
            setMaskImage={setMaskImage}
          />

          {/* Clear Images Button */}
          {(originalImage && maskImage) && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={clearImages}
                className="bg-red-500 text-white py-2 px-4 rounded-lg"
              >
                Clear Images
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
