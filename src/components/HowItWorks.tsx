
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, ChevronRight, Clipboard, UserCheck, MessageSquare } from 'lucide-react';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const steps = [
    {
      id: 1,
      title: "Discovery Call",
      description: "Book a free discovery call. We learn about your goals, tools, and current bottlenecks.",
      icon: <Calendar className="h-8 w-8 text-white" />
    },
    {
      id: 2,
      title: "Custom Support Plan",
      description: "We propose a support plan tailored to your needs.",
      icon: <Clipboard className="h-8 w-8 text-white" />
    },
    {
      id: 3,
      title: "Onboarding",
      description: "We onboard your team, document your workflows, and begin providing ongoing support.",
      icon: <UserCheck className="h-8 w-8 text-white" />
    },
    {
      id: 4,
      title: "Ongoing Support",
      description: "You'll receive regular check-ins and transparent reporting, with the ability to scale services up or down as needed.",
      icon: <MessageSquare className="h-8 w-8 text-white" />
    }
  ];
  
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-opsbridge-navy/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <Calendar className="h-12 w-12 mx-auto text-opsbridge-blue mb-4" />
          </motion.div>
          
          <motion.h2 
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            How It Works
          </motion.h2>
          
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our streamlined process makes getting started quick and easy.
          </motion.p>
        </div>
        
        {/* Enhanced Step Layout - Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="card h-full flex flex-col relative">
                {/* Connecting lines between steps */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-3 w-6 h-[2px] bg-opsbridge-blue/50">
                    <div className="absolute right-0 top-1/2 transform translate-x-0 -translate-y-1/2">
                      <ChevronRight className="h-4 w-4 text-opsbridge-blue" />
                    </div>
                  </div>
                )}
                
                {/* Step number with icon */}
                <div className="mb-4 relative z-10">
                  <div className="bg-opsbridge-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.icon}
                    </motion.div>
                  </div>
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-opsbridge-navy font-bold text-sm absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                    {step.id}
                  </div>
                </div>
                
                {/* Step content */}
                <h3 className="text-xl font-bold text-white mb-2 text-center">{step.title}</h3>
                <p className="text-gray-300 text-center flex-grow">{step.description}</p>
                
                {/* Interactive glow border animation on hover */}
                <motion.div 
                  className="absolute inset-0 border border-opsbridge-blue/0 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ 
                    opacity: 1,
                    boxShadow: "0 0 15px rgba(45, 156, 219, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Vertical Steps */}
        <div className="md:hidden max-w-md mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex mb-12 relative">
                {/* Step icon */}
                <div className="flex-shrink-0 z-10">
                  <div className="bg-opsbridge-blue w-12 h-12 rounded-full flex items-center justify-center relative">
                    {step.icon}
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white text-opsbridge-navy font-bold text-sm absolute -top-2 -right-2">
                      {step.id}
                    </div>
                  </div>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-12 w-[2px] h-12 bg-opsbridge-blue/30 transform -translate-x-1/2"></div>
                )}
                
                {/* Step content */}
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
