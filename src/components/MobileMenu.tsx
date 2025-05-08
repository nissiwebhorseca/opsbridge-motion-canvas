
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
  
  const menuVariants = {
    closed: { x: '100%', opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 24,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: { ease: 'easeInOut', duration: 0.3 }
    }
  };
  
  const itemVariants = {
    closed: { x: 20, opacity: 0 },
    open: { x: 0, opacity: 1 }
  };
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-opsbridge-background/95 backdrop-blur-xl flex flex-col"
      variants={menuVariants}
      initial="closed"
      animate="open"
      exit="exit"
    >
      <div className="container flex justify-between items-center py-4">
        <motion.a 
          href="#" 
          className="flex items-center"
          variants={itemVariants}
        >
          <span className="text-white text-xl font-space-grotesk font-bold">
            Ops<span className="text-opsbridge-blue">Bridge</span>
          </span>
        </motion.a>
        
        <motion.button 
          className="text-white p-2 focus:outline-none"
          onClick={onClose}
          aria-label="Close menu"
          variants={itemVariants}
          whileHover={{ rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="h-6 w-6" />
        </motion.button>
      </div>
      
      <div className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
        {['services', 'why-us', 'clients', 'how-it-works'].map((item, index) => (
          <motion.a 
            key={item}
            href={`#${item}`}
            className="nav-link text-xl relative group"
            variants={itemVariants}
            onClick={handleLinkClick}
            whileHover={{ x: 5, color: '#fff' }}
            custom={index}
          >
            <span>{item === 'services' ? 'Services' : 
                   item === 'why-us' ? 'Why Us' : 
                   item === 'clients' ? 'Who We Serve' : 'How It Works'}</span>
            <motion.span 
              className="absolute bottom-0 left-0 w-full h-0.5 bg-opsbridge-blue" 
              initial={{ scaleX: 0, originX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
        
        <motion.a 
          href="#contact" 
          className="cta-button text-xl mt-4 relative overflow-hidden"
          variants={itemVariants}
          onClick={handleLinkClick}
          whileHover={{ y: -4, boxShadow: '0 0 20px rgba(45, 156, 219, 0.6)' }}
        >
          Get Started
          <motion.div
            className="absolute inset-0 bg-white opacity-0"
            initial={{ scale: 0, x: '-50%', y: '-50%' }}
            whileHover={{ scale: 2, opacity: 0.1 }}
            transition={{ duration: 0.5 }}
            style={{ left: '50%', top: '50%', borderRadius: '100%' }}
          />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
