
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const scrollToNext = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  
  const strongWordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="absolute top-0 right-0 w-full h-full z-[-1] overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-1/2 h-1/2 bg-opsbridge-navy opacity-10 blur-[100px] rounded-full"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-opsbridge-blue opacity-5 blur-[100px] rounded-full"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute top-[30%] left-[20%] w-4 h-4 rounded-full bg-opsbridge-blue/20"
          animate={{ 
            y: [0, -30, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute bottom-[30%] right-[20%] w-6 h-6 rounded-full bg-opsbridge-green/20"
          animate={{ 
            y: [0, 40, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center" ref={ref}>
          <motion.div
            variants={headlineVariants}
            initial="hidden"
            animate={controls}
            className="mb-6"
          >
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              <motion.span variants={wordVariants} className="inline-block mr-2">Launch</motion.span> 
              <motion.span 
                variants={strongWordVariants} 
                className="inline-block mr-2 relative"
                animate={{
                  textShadow: ['0 0 5px rgba(45, 156, 219, 0)', '0 0 15px rgba(45, 156, 219, 0.5)', '0 0 5px rgba(45, 156, 219, 0)']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Strong.
              </motion.span> 
              <motion.span variants={wordVariants} className="inline-block mr-2 text-opsbridge-blue glow-text">Scale</motion.span> 
              <motion.span 
                variants={strongWordVariants} 
                className="inline-block relative"
                animate={{
                  textShadow: ['0 0 5px rgba(45, 156, 219, 0)', '0 0 15px rgba(45, 156, 219, 0.5)', '0 0 5px rgba(45, 156, 219, 0)']
                }}
                transition={{
                  duration: 2,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Smart.
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Your fully managed, tech-enabled operations support partner. We help entrepreneurs
            build lean startups and support SMEs as they scale.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="relative inline-block"
            whileHover={{ y: -4 }}
          >
            <motion.a 
              href="#contact" 
              className="cta-button inline-block relative overflow-hidden"
              whileHover={{ boxShadow: '0 0 20px rgba(45, 156, 219, 0.6)' }}
            >
              Schedule Your Free Consult
              
              <motion.div
                className="absolute inset-0 bg-white opacity-0"
                initial={{ scale: 0, x: '-50%', y: '-50%' }}
                whileHover={{ scale: 2, opacity: 0.1 }}
                transition={{ duration: 0.5 }}
                style={{ left: '50%', top: '50%', borderRadius: '100%' }}
              />
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            onClick={scrollToNext}
          >
            <motion.div
              animate={{ 
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <ChevronDown className="h-8 w-8 text-opsbridge-blue" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
