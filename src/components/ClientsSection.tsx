
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
    <section id="clients" className="py-20 md:py-28 relative" ref={ref}>
      {/* Full-bleed background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-opsbridge-background via-opsbridge-navy/50 to-opsbridge-background z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Modern tech workspace"
          className="object-cover w-full h-full opacity-40"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
            className="text-gray-300 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Whether you're bootstrapping or post-Series A, we support your internal operations so you can focus on your customers.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <AspectRatio ratio={16/9}>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Remote professional working"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-opsbridge-navy/90 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Remote-First Teams</h3>
              </div>
            </AspectRatio>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-lg overflow-hidden shadow-lg"
          >
            <AspectRatio ratio={16/9}>
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Tech focused workspace"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-opsbridge-navy/90 to-transparent flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">Digital Entrepreneurs</h3>
              </div>
            </AspectRatio>
          </motion.div>
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
