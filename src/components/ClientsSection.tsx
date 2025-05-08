
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users } from 'lucide-react';

const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const clients = [
    "Solo Founders",
    "Startup Teams",
    "Scaling SMEs",
    "Nonprofit Directors",
    "Consultants",
    "Digital Agencies",
    "Remote-First Companies"
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <section id="clients" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <Users className="h-12 w-12 mx-auto text-opsbridge-blue mb-4" />
          </motion.div>
          
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Who We Serve
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you're bootstrapping or post-Series A, we support your internal operations so you can focus on your customers.
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4"
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glassmorphic px-6 py-3 rounded-full text-white border-opsbridge-blue/30 hover:border-opsbridge-blue transition-colors duration-300"
            >
              {client}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
