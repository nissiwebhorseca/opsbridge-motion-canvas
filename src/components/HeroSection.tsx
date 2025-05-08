
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
  
  const glowWordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Full-bleed background image with overlay */}
      <div className="absolute inset-0 z-[-2]">
        <div className="absolute inset-0 bg-gradient-to-b from-opsbridge-background/90 via-opsbridge-background/70 to-opsbridge-background/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Team collaborating in modern workspace"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="absolute top-0 right-0 w-full h-full z-[-1] overflow-hidden">
        {/* Enhanced animated background elements */}
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
        
        {/* Additional floating particles */}
        {[...Array(6)].map((_, index) => (
          <motion.div 
            key={index}
            className={`absolute rounded-full bg-opsbridge-blue/20 ${
              index % 2 === 0 ? 'w-4 h-4' : 'w-6 h-6'
            }`}
            style={{
              top: `${20 + (index * 15)}%`,
              left: `${10 + (index * 15)}%`,
            }}
            animate={{ 
              y: [0, index % 2 === 0 ? -30 : -40, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.5
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center" ref={ref}>
          <motion.div
            variants={headlineVariants}
            initial="hidden"
            animate={controls}
            className="mb-6"
          >
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-wide">
              <motion.span variants={wordVariants} className="inline-block mr-2">Launch</motion.span> 
              <motion.span 
                variants={glowWordVariants} 
                className="inline-block mr-2 relative text-opsbridge-blue"
                animate={{
                  textShadow: ['0 0 5px rgba(45, 156, 219, 0)', '0 0 15px rgba(45, 156, 219, 0.8)', '0 0 5px rgba(45, 156, 219, 0)']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Strong.
              </motion.span> 
              <br className="hidden sm:block" />
              <motion.span variants={wordVariants} className="inline-block mr-2">Scale</motion.span> 
              <motion.span 
                variants={glowWordVariants} 
                className="inline-block relative text-opsbridge-blue"
                animate={{
                  textShadow: ['0 0 5px rgba(45, 156, 219, 0)', '0 0 15px rgba(45, 156, 219, 0.8)', '0 0 5px rgba(45, 156, 219, 0)']
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
