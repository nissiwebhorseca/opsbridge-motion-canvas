
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  const steps = [
    {
      id: 1,
      title: "Discovery Call",
      description: "Book a free discovery call. We learn about your goals, tools, and current bottlenecks."
    },
    {
      id: 2,
      title: "Custom Support Plan",
      description: "We propose a support plan tailored to your needs."
    },
    {
      id: 3,
      title: "Onboarding",
      description: "We onboard your team, document your workflows, and begin providing ongoing support."
    },
    {
      id: 4,
      title: "Ongoing Support",
      description: "You'll receive regular check-ins and transparent reporting, with the ability to scale services up or down as needed."
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
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex mb-12 relative">
                {/* Step number */}
                <div className="flex-shrink-0 z-10">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-opsbridge-blue text-white font-bold text-xl">
                    {step.id}
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
                
                {/* Arrow on all but last step */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute left-1/2 -bottom-6 transform -translate-x-1/2">
                    <ChevronRight className="h-5 w-5 text-opsbridge-blue transform rotate-90" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
