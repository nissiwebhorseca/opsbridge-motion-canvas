
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Track scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Determine active section for potential nav highlighting
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 150;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Add a custom cursor effect for enhanced UI feel
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState("default");
  
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener("mousemove", mouseMove);
    
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 0
    },
    button: {
      height: 50,
      width: 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      opacity: 0.1,
      backgroundColor: "#2D9CDB"
    }
  };
  
  // Function to enter button cursor state
  const buttonEnter = () => setCursorVariant("button");
  // Function to reset cursor state
  const buttonLeave = () => setCursorVariant("default");
  
  // Apply events to interactive elements
  useEffect(() => {
    const buttons = document.querySelectorAll("a, button, [role='button']");
    
    buttons.forEach(button => {
      button.addEventListener("mouseenter", buttonEnter);
      button.addEventListener("mouseleave", buttonLeave);
    });
    
    return () => {
      buttons.forEach(button => {
        button.removeEventListener("mouseenter", buttonEnter);
        button.removeEventListener("mouseleave", buttonLeave);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full mix-blend-difference bg-white pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />
      
      <ParticleBackground />
      <Navbar toggleMenu={toggleMenu} />
      
      <AnimatePresence>
        {isMenuOpen && <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />}
      </AnimatePresence>
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        
        <motion.div
          style={{
            opacity: Math.min(1, Math.max(0, (scrollY - 300) / 500))
          }}
        >
          <ServicesSection />
        </motion.div>
        
        <motion.div
          style={{
            opacity: Math.min(1, Math.max(0, (scrollY - 800) / 500))
          }}
        >
          <WhyChooseUs />
        </motion.div>
        
        <motion.div
          style={{
            opacity: Math.min(1, Math.max(0, (scrollY - 1300) / 500))
          }}
        >
          <ClientsSection />
        </motion.div>
        
        <motion.div
          style={{
            opacity: Math.min(1, Math.max(0, (scrollY - 1800) / 500))
          }}
        >
          <HowItWorks />
        </motion.div>
        
        <motion.div
          style={{
            opacity: Math.min(1, Math.max(0, (scrollY - 2300) / 500))
          }}
        >
          <ContactSection />
        </motion.div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Index;
