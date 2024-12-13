import React from "react";
import Header from "../components/Header";
import UploadSection from "../components/UploadSection";
import Preview from "../components/Preview";
import Footer from "../components/Footer";
import ImportPopUp from "../components/ImportPopUp";

const HomePage = () =>{
    return (
        <div className="h-screen flex flex-col">
        <Header />
        
        <div className="flex flex-1 overflow-y-auto">
        <UploadSection />
        <Preview />
        </div>
        <Footer />
        </div>
    )
}
export default HomePage;