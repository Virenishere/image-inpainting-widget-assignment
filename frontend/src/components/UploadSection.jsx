import React, { useState } from "react";
import ImportPopUp from "./ImportPopUp";

const UploadSection = () => {
  const [activeSection, setActiveSection] = useState("Upload");
  const [showPopup, setShowPopup] = useState(false);

  const handleSectionClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    }
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 bg-[#242332] p-4 flex flex-col rounded-md ml-8 h-5/6">
      <div className="flex space-x-4 mb-4 border-b-2">
        <div
          className={`cursor-pointer py-2 px-6 rounded-t-md ${
            activeSection === "Upload"
              ? "text-white font-bold text-sm bg-[#808080] border-yellow-500"
              : "text-white text-sm hover:text-yellow-500"
          }`}
          onClick={() => handleSectionClick("Upload")}
        >
          Upload
        </div>
        <div
          className={`cursor-pointer py-2 px-6 rounded-t-md ${
            activeSection === "Controls"
              ? "text-white font-bold text-sm bg-[#808080] border-yellow-500"
              : "text-white text-sm hover:text-yellow-500"
          }`}
          onClick={() => handleSectionClick("Controls")}
        >
          Controls
        </div>
        <div
          className={`cursor-pointer py-2 px-6 rounded-t-md ${
            activeSection === "Export"
              ? "text-white font-bold text-sm bg-[#808080] border-yellow-500"
              : "text-white text-sm hover:text-yellow-500"
          }`}
          onClick={() => handleSectionClick("Export")}
        >
          Export
        </div>
      </div>
      <div className="outline-dashed outline-slate-400 rounded-lg p-6 flex-1 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <label htmlFor="file-upload" className="cursor-pointer">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto mb-2 hover:opacity-80 transition-opacity"
            >
              <path
                d="M21.0937 7.8125L20.4427 18.8875C20.4076 19.4844 20.1457 20.0454 19.7106 20.4555C19.2755 20.8657 18.7 21.094 18.1021 21.0937H6.89792C6.29996 21.094 5.72453 20.8657 5.2894 20.4555C4.85428 20.0454 4.59237 19.4844 4.55729 18.8875L3.90625 7.8125M12.5 10.9375V17.9687M12.5 17.9687L9.375 14.8437M12.5 17.9687L15.625 14.8437M3.51562 7.8125H21.4844C22.1312 7.8125 22.6562 7.2875 22.6562 6.64062V5.07812C22.6562 4.43125 22.1312 3.90625 21.4844 3.90625H3.51562C2.86875 3.90625 2.34375 4.43125 2.34375 5.07812V6.64062C2.34375 7.2875 2.86875 7.8125 3.51562 7.8125Z"
                stroke="#808080"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-2xl font-medium">Upload Your Image Here</p>
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>
      </div>
      {showPopup && <ImportPopUp onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default UploadSection;
