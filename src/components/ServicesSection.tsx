
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, TrendingUp, Code } from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const services = [
    {
      id: 1,
      icon: <Rocket className="h-10 w-10 text-opsbridge-blue" />,
      title: "Startup Enablement",
      description: "We help founders and new teams launch strong with company setup support, workflow design, executive assistance, and documentation."
    },
    {
      id: 2,
      icon: <TrendingUp className="h-10 w-10 text-opsbridge-green" />,
      title: "SME Scaling Support",
      description: "We help small businesses scale operations with remote admin teams, system optimization, SOP design, and flexible back office support."
    },
    {
      id: 3,
      icon: <Code className="h-10 w-10 text-opsbridge-blue" />,
      title: "Tech & Back Office Services",
      description: "We support digital infrastructure with cloud tool setup, knowledge base management, helpdesk triage, and operations mapping."
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring", 
        damping: 15, 
        stiffness: 100 
      } 
    }
  };
  
  return (
    <section id="services" className="py-20 md:py-28 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            What We Do
          </motion.h2>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We provide cost-effective, remote back office and digital services that let our clients focus on what matters most—growing their business.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="enhanced-card flex flex-col p-8 h-full group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <motion.div 
                className="mb-4 flex justify-center items-center"
                whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    damping: 10
                  }}
                >
                  {service.icon}
                </motion.div>
              </motion.div>
              
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-300 flex-grow">{service.description}</p>
              
              <motion.div 
                className="w-0 h-0.5 bg-opsbridge-blue mt-4"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
