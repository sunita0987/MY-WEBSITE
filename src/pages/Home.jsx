import React from "react";
import Introduction from "../components/Introduction";
import Animation from "../components/Animation";
import HeroSection from "../components/HeroSection";
import CTASection from "../components/CTASection";
import Certifications from "../components/Certification";
import FunFacts from "../components/FunFacts";
import ImageUpload from "../components/ImageUpload";
import Timeline from "../components/Timeline";
import Tools from "../components/Tools";
import Footer from "../common/Footer";
import WhatsAppButton from "../common/WhatsappButton";

function Home() {
  return (
    <div>
      <Introduction />
      <Animation />
      <HeroSection />
      <CTASection />
      <Certifications />
      <FunFacts />
      <ImageUpload />
      <Timeline />
      <Tools />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default Home;
