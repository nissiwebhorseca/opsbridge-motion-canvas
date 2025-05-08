
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <section id="contact" className="py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.h2 
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Get Your Back Office Out Of Your Way
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Schedule your free consult and let us help you move faster and smarter.
            </motion.p>
            
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-opsbridge-blue mr-3" />
                <a href="mailto:info@opsbridge.com" className="text-gray-300 hover:text-white transition-colors">
                  info@opsbridge.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-opsbridge-blue mr-3" />
                <span className="text-gray-300">Book a call directly on our website</span>
              </div>
              
              <div className="pt-6">
                <h3 className="font-bold text-xl mb-2 text-white">Privacy and security:</h3>
                <p className="text-gray-300">
                  OpsBridge uses secure cloud tools, signs confidentiality agreements, and follows best practices in data protection and operational integrity.
                </p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="card"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-opsbridge-navy/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-opsbridge-blue transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-opsbridge-navy/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-opsbridge-blue transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-opsbridge-navy/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-opsbridge-blue transition-colors"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="cta-button w-full flex justify-center items-center"
              >
                Schedule Your Free Consult
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
