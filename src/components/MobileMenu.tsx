
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  // Close menu when clicking on a link
  const handleLinkClick = () => {
    onClose();
  };
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-opsbridge-background/95 backdrop-blur-md flex flex-col"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
    >
      <div className="container flex justify-between items-center py-4">
        <a href="#" className="flex items-center">
          <span className="text-white text-xl font-space-grotesk font-bold">
            Ops<span className="text-opsbridge-blue">Bridge</span>
          </span>
        </a>
        
        <button 
          className="text-white p-2 focus:outline-none"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
        <a href="#services" className="nav-link text-xl" onClick={handleLinkClick}>Services</a>
        <a href="#why-us" className="nav-link text-xl" onClick={handleLinkClick}>Why Us</a>
        <a href="#clients" className="nav-link text-xl" onClick={handleLinkClick}>Who We Serve</a>
        <a href="#how-it-works" className="nav-link text-xl" onClick={handleLinkClick}>How It Works</a>
        <a href="#contact" className="cta-button text-xl mt-4" onClick={handleLinkClick}>Get Started</a>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
