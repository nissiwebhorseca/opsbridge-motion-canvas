
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  toggleMenu: () => void;
}

const Navbar = ({ toggleMenu }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');
  
  // Handle scroll effect for navbar and section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar background on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Track active section for nav highlighting
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links configuration
  const navLinks = [
    { id: 'services', label: 'Services' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'clients', label: 'Who We Serve' },
    { id: 'how-it-works', label: 'How It Works' }
  ];
  
  // Handle smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      initial={{ backgroundColor: 'rgba(13, 17, 23, 0)' }}
      animate={{ 
        backgroundColor: scrolled ? 'rgba(13, 17, 23, 0.9)' : 'rgba(13, 17, 23, 0)',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(0px)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none'
      }}
    >
      <div className="container flex justify-between items-center py-4">
        <motion.a 
          href="#" 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="text-white text-xl font-space-grotesk font-bold">
            Ops<span className="text-opsbridge-blue">Bridge</span>
          </span>
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((item, index) => (
            <motion.a 
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link relative group ${activeLink === item.id ? 'opacity-100' : 'opacity-70'}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: activeLink === item.id ? 1 : 0.7, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, opacity: 1 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              <span>{item.label}</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-opsbridge-blue" 
                initial={{ scaleX: activeLink === item.id ? 1 : 0, originX: 0 }}
                animate={{ scaleX: activeLink === item.id ? 1 : 0 }}
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
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            <motion.span 
              className="cta-button inline-block"
              whileHover={{ boxShadow: '0 0 15px rgba(45, 156, 219, 0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.span>
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
