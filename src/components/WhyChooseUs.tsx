
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const reasons = [
    "Low CapEx model designed for fast-moving teams",
    "Flat-fee support plans that scale up or down",
    "Remote team trained on North American expectations and tools",
    "Dedicated point of contact for structured, documented support",
    "Managed, accountable service led by Canadian business experts",
    "Transparent, predictable pricing with no surprise invoices",
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };
  
  return (
    <section id="why-us" className="py-20 md:py-28 relative bg-opsbridge-navy/30" ref={ref}>
      {/* Background image with overlay for texture */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-opsbridge-navy to-opsbridge-background z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Professional workspace"
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2 
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Why Choose OpsBridge
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Led by experienced Canadian business development professionals, OpsBridge combines global operational support with strategic insight. We don't just fill roles—we lead the process.
            </motion.p>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {reasons.map((reason, index) => (
                <motion.div key={index} variants={itemVariants} className="flex items-start">
                  <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-opsbridge-blue"></div>
                  <p className="text-gray-300">{reason}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <motion.div
            className="glassmorphic rounded-lg p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-opsbridge-blue opacity-10 blur-[50px] rounded-full"></div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">Our Mission</h3>
            <p className="text-gray-300 mb-6 relative z-10">
              Our name stands for what we do: we are the bridge between bold ideas and reliable execution. We support your business operations from day one through smart systems, scalable staffing, and modern cloud tools—without the overhead of traditional hiring or management complexity.
            </p>
            <div className="flex flex-col space-y-4 relative z-10">
              <div className="flex items-center">
                <div className="h-10 w-1 bg-opsbridge-blue mr-4"></div>
                <p className="font-dm-sans font-bold text-xl text-white">Launch Strong. Scale Smart.</p>
              </div>
              <p className="text-gray-300 pl-5">
                Our vision is to become the leading operational support partner for lean teams worldwide. We believe in building businesses that are agile, efficient, and focused.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
