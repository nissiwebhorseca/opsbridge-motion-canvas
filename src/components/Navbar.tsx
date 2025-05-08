
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

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
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-opsbridge-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container flex justify-between items-center py-4">
        <a href="#" className="flex items-center">
          <span className="text-white text-xl font-space-grotesk font-bold">
            Ops<span className="text-opsbridge-blue">Bridge</span>
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="nav-link">Services</a>
          <a href="#why-us" className="nav-link">Why Us</a>
          <a href="#clients" className="nav-link">Who We Serve</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#contact" className="cta-button">Get Started</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
