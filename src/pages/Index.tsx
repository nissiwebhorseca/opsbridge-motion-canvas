
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

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
  const { scrollY } = useScroll();
  
  // Refs for each section
  const servicesRef = useRef(null);
  const whyUsRef = useRef(null);
  const clientsRef = useRef(null);
  const howItWorksRef = useRef(null);
  const contactRef = useRef(null);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Enhanced scroll-triggered animations using framer-motion's useTransform
  const servicesOpacity = useTransform(
    scrollY, 
    [300, 500, 1100, 1300], 
    [0, 1, 1, 0]
  );
  
  const whyUsOpacity = useTransform(
    scrollY, 
    [800, 1000, 1600, 1800], 
    [0, 1, 1, 0]
  );
  
  const clientsOpacity = useTransform(
    scrollY, 
    [1300, 1500, 2100, 2300], 
    [0, 1, 1, 0]
  );
  
  const howItWorksOpacity = useTransform(
    scrollY, 
    [1800, 2000, 2600, 2800], 
    [0, 1, 1, 0]
  );
  
  const contactOpacity = useTransform(
    scrollY, 
    [2300, 2500], 
    [0, 1]
  );
  
  // Track scroll position for animations and active section
  useEffect(() => {
    const handleScroll = () => {
      // Determine active section for navigation highlighting
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
  
  // Enhanced cursor effect
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
      opacity: 0.4,
      height: 32,
      width: 32,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      mixBlendMode: "difference" as "difference"
    },
    button: {
      height: 50,
      width: 50,
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      opacity: 0.2,
      backgroundColor: "#2D9CDB",
      mixBlendMode: "normal" as "normal"
    },
    text: {
      height: 24,
      width: 24,
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      opacity: 0.15,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference" as "difference"
    }
  };
  
  // Functions for cursor states
  const buttonEnter = () => setCursorVariant("button");
  const buttonLeave = () => setCursorVariant("default");
  const textEnter = () => setCursorVariant("text");
  
  // Apply events to interactive elements
  useEffect(() => {
    const buttons = document.querySelectorAll("a, button, [role='button']");
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span");
    
    buttons.forEach(button => {
      button.addEventListener("mouseenter", buttonEnter);
      button.addEventListener("mouseleave", buttonLeave);
    });
    
    textElements.forEach(element => {
      element.addEventListener("mouseenter", textEnter);
      element.addEventListener("mouseleave", buttonLeave);
    });
    
    return () => {
      buttons.forEach(button => {
        button.removeEventListener("mouseenter", buttonEnter);
        button.removeEventListener("mouseleave", buttonLeave);
      });
      
      textElements.forEach(element => {
        element.removeEventListener("mouseenter", textEnter);
        element.removeEventListener("mouseleave", buttonLeave);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <motion.div
        className="hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.5 }}
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
        
        <motion.div style={{ opacity: servicesOpacity }} ref={servicesRef}>
          <ServicesSection />
        </motion.div>
        
        <motion.div style={{ opacity: whyUsOpacity }} ref={whyUsRef}>
          <WhyChooseUs />
        </motion.div>
        
        <motion.div style={{ opacity: clientsOpacity }} ref={clientsRef}>
          <ClientsSection />
        </motion.div>
        
        <motion.div style={{ opacity: howItWorksOpacity }} ref={howItWorksRef}>
          <HowItWorks />
        </motion.div>
        
        <motion.div style={{ opacity: contactOpacity }} ref={contactRef}>
          <ContactSection />
        </motion.div>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default Index;
