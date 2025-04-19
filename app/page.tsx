import Header from "@/components/header";
import HeroSection from "@/components/sections/hero-section";
import SolutionSection from "@/components/sections/solution-section";
import FeaturesSection from "@/components/sections/features-section";
import Footer from "@/components/footer";
import React from "react";
import UnstructuredDataSection from "@/components/sections/unstructured-data-section";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SolutionSection />
      <UnstructuredDataSection />
      <Footer />
    </div>
  );
};

export default HomePage;
