import React, { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";
import CanvasControls from "../components/CanvasControl";
import axios from 'axios';

const Canvas = ({ onMaskGenerated }) => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [brushSize, setBrushSize] = useState(20);
  const fileInputRef = useRef(null);
  const [colorSelect, setColorSelect] = useState("#fff");
  
  // State for responsive canvas size
  const [canvasWidth, setCanvasWidth] = useState(600);
  const [canvasHeight, setCanvasHeight] = useState(400);

  useEffect(() => {
    // Handle resizing of canvas based on screen width
    const handleResize = () => {
      const width = window.innerWidth < 768 ? 300 : 600; // If width is less than tablet (768px), set to 300px
      const height = window.innerWidth < 768 ? 200 : 400; // Adjust height for smaller screens
      setCanvasWidth(width);
      setCanvasHeight(height);
    };

    // Initial resize
    handleResize();

    // Add event listener for resizing the window
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (canvasRef.current) {
      const fabricCanvas = new fabric.Canvas(canvasRef.current, {
        width: canvasWidth,
        height: canvasHeight,
        isDrawingMode: true,
      });

      // Initialize the brush
      fabricCanvas.freeDrawingBrush = new fabric.PencilBrush(fabricCanvas);
      fabricCanvas.freeDrawingBrush.color = colorSelect;
      fabricCanvas.freeDrawingBrush.width = brushSize;

      setCanvas(fabricCanvas);

      return () => {
        fabricCanvas.dispose();
      };
    }
  }, [canvasWidth, canvasHeight]); // Reinitialize the canvas on size change

  useEffect(() => {
    if (canvas) {
      canvas.freeDrawingBrush.color = colorSelect;
    }
  }, [colorSelect, canvas]);

  useEffect(() => {
    if (canvas) {
      canvas.freeDrawingBrush.width = brushSize;
    }
  }, [brushSize, canvas]);

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (file && canvas) {
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const img = await fabric.Image.fromURL(event.target?.result);

          // Clear previous canvas content
          canvas.clear();

          // Scale the image to fit the canvas
          const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
          img.scale(scale);

          // Center the image on the canvas
          img.set({
            left: (canvas.width - img.width * scale) / 2,
            top: (canvas.height - img.height * scale) / 2,
            selectable: false, // Disable selection
            evented: false,    // Prevent interaction
          });

          // Add the image to the canvas
          canvas.add(img);
          canvas.renderAll();

          // Add a black transparent rectangle over the image
          const overlay = new fabric.Rect({
            left: 0,
            top: 0,
            width: canvas.width,
            height: canvas.height,
            fill: 'rgba(0, 0, 0, 0.5)', // Black transparent layer
            selectable: false,
            evented: false,
          });

          canvas.add(overlay);
          canvas.renderAll();
        } catch (error) {
          console.error("Error loading image:", error);
        }
      };
      reader.readAsDataURL(file);
    }
  };


  const handleExport = async () => {
    if (canvas) {
      const original = canvas.toDataURL({ format: "png", quality: 1 });
  
      // Create a file object from the base64 data URL for uploading
      const originalFile = dataURLtoFile(original, "original_image.png");
  
      // Send original image to backend
      await uploadImageToBackend(originalFile, originalFile); // Assuming mask image is the same
      onMaskGenerated(original, "");
    }
  };
  
  const handleExportMask = async () => {
    if (canvas) {
      const objectsToRemove = canvas.getObjects().filter(
        (obj) => obj.type === "image"
      );
      objectsToRemove.forEach((obj) => canvas.remove(obj));
      canvas.renderAll();
  
      const mask = canvas.toDataURL({ format: "png", quality: 1 });
  
      // Create a file object from the base64 data URL for uploading
      const maskFile = dataURLtoFile(mask, "mask_image.png");
  
      // Send mask image to backend
      await uploadImageToBackend(maskFile, maskFile); // Assuming mask image is the same
      onMaskGenerated("", mask);
    }
  };
  
  // Utility function to convert base64 data URL to File object
  function dataURLtoFile(dataURL, filename) {
    const [metadata, base64Data] = dataURL.split(',');
    const binaryString = atob(base64Data);
    const arrayBuffer = new ArrayBuffer(binaryString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < binaryString.length; i++) {
      uint8Array[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([uint8Array], { type: 'image/png' });
  
    // Generate a unique filename by appending a random number
    const randomSuffix = Math.floor(Math.random() * 1000000); // You can also use Date.now() for a timestamp-based name
    const uniqueFilename = filename.replace('.png', `_${randomSuffix}.png`);
  
    return new File([blob], uniqueFilename, { type: 'image/png' });
  }
  

  const clearCanvas = () => {
    if (canvas) {
      canvas.clear();
      canvas.backgroundColor = "black";
      canvas.renderAll();
    }
  };

  // Function to send image to FastAPI backend
  const uploadImageToBackend = async (originalImageData, maskImageData) => {
    try {
      const formData = new FormData();
      
      // Append the files directly to the FormData object
      formData.append("original_image", originalImageData);
      formData.append("mask_image", maskImageData);
  
      const response = await axios.post('http://localhost:8000/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log("Images uploaded successfully", response.data);
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  };
  

  return (
    <div className="flex flex-col items-center gap-4">
      <CanvasControls
        onUploadClick={() => fileInputRef.current?.click()}
        onClear={clearCanvas}
        onExport={handleExport}
        handleExportMask={handleExportMask}
        brushSize={brushSize}
        setBrushSize={setBrushSize}
      />
      
      {/* File Upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="border border-gray-300 rounded-lg"
      />

      {/* Download Buttons */}
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          onClick={() => handleDownload('original')}
        >
          Download Original
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => handleDownload('mask')}
        >
          Download Mask
        </button>
      </div>
    </div>
  );
};

export default Canvas;
