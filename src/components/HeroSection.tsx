
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
  
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="absolute top-0 right-0 w-full h-full z-[-1]">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-opsbridge-navy opacity-10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-opsbridge-blue opacity-5 blur-[100px]" />
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
              <motion.span variants={wordVariants} className="inline-block mr-2">Strong.</motion.span> 
              <motion.span variants={wordVariants} className="inline-block mr-2 text-opsbridge-blue glow-text">Scale</motion.span> 
              <motion.span variants={wordVariants} className="inline-block">Smart.</motion.span>
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
          >
            <a 
              href="#contact" 
              className="cta-button inline-block animate-glowing"
            >
              Schedule Your Free Consult
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
