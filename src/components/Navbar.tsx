
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  toggleMenu: () => void;
}

const Navbar = ({ toggleMenu }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500`}
      initial={{ backgroundColor: 'rgba(13, 17, 23, 0)' }}
      animate={{ 
        backgroundColor: scrolled ? 'rgba(13, 17, 23, 0.9)' : 'rgba(13, 17, 23, 0)',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)'
      }}
    >
      <div className="container flex justify-between items-center py-4">
        <motion.a 
          href="#" 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white text-xl font-space-grotesk font-bold">
            Ops<span className="text-opsbridge-blue">Bridge</span>
          </span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['services', 'why-us', 'clients', 'how-it-works'].map((item, index) => (
            <motion.a 
              key={item}
              href={`#${item}`}
              className="nav-link relative group"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
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
            className="relative overflow-hidden group"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <span className="cta-button inline-block">Get Started</span>
            <motion.div 
              className="absolute inset-0 bg-white rounded-full opacity-0"
              initial={{ scale: 0 }}
              whileHover={{ scale: 2, opacity: 0.1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-white p-2 focus:outline-none overflow-hidden"
          onClick={toggleMenu}
          aria-label="Open menu"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="h-6 w-6" />
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Navbar;
