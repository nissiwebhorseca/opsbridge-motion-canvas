
import { useEffect, useRef, useState } from "react";
import { Book, Calendar, Mail, Phone, Users } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

// Component imports
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ClientsSection from "@/components/ClientsSection";
import HowItWorks from "@/components/HowItWorks";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MobileMenu from "@/components/MobileMenu";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar toggleMenu={toggleMenu} />
      {isMenuOpen && <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />}
      
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ClientsSection />
      <HowItWorks />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
