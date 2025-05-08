
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="text-white text-xl font-space-grotesk font-bold">
                Ops<span className="text-opsbridge-blue">Bridge</span>
              </span>
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              © {new Date().getFullYear()} OpsBridge. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">
              Services
            </a>
            <a href="#why-us" className="text-gray-400 hover:text-white transition-colors">
              Why Us
            </a>
            <a href="#clients" className="text-gray-400 hover:text-white transition-colors">
              Who We Serve
            </a>
            <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
              How It Works
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-opsbridge-navy p-3 rounded-full hover:bg-opsbridge-blue transition-colors mt-4 md:mt-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
