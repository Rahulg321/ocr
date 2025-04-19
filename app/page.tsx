import Header from "@/components/header";
import HeroSection from "@/components/sections/hero-section";
import SolutionSection from "@/components/sections/solution-section";
import FeaturesSection from "@/components/sections/features-section";
import Footer from "@/components/footer";
import React from "react";
import UnstructuredDataSection from "@/components/sections/unstructured-data-section";
import HowHelpSection from "@/components/sections/how-help-section";
import HowItWorksSection from "@/components/sections/how-it-works-section";
import RealWorldSolutions from "@/components/sections/real-world-solutions";
import ApiSection from "@/components/sections/api-section";
import FileUploadSection from "@/components/sections/file-upload-section";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SolutionSection />
      <UnstructuredDataSection />
      <HowHelpSection />
      <HowItWorksSection />
      <RealWorldSolutions />
      <ApiSection />
      <FileUploadSection />
      <Footer />
    </div>
  );
};

export default HomePage;
